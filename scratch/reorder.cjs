
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "components", "RoomsPreview.tsx");
let content = fs.readFileSync(filePath, "utf-8");

// new order based on user request:
// 4: Matrimonial Estandar
// 5: Queen Ejecutiva
// 6: Matrimonial Superior
// 2: Individual Superior
// 7: Doble Superior
// 8: Familiar
// 10: Triple Economica
// 9: Triple Estandar
// 11: Cuadruple Estandar
// 1: Individual Basica
// 3: Matrimonial Economica
const newOrder = [4, 5, 6, 2, 7, 8, 10, 9, 11, 1, 3];

function reorderArray(langStr) {
  let roomsStart = content.indexOf(`rooms: [`, content.indexOf(`${langStr}: {`));
  let roomsEnd = content.indexOf(`]\n  }`, roomsStart);
  if (roomsEnd === -1) {
    roomsEnd = content.indexOf(`]\n    }`, roomsStart);
  }
  
  let roomsStr = content.substring(roomsStart + `rooms: [`.length, roomsEnd);
  
  let roomBlocks = [];
  let currentPos = 0;
  
  while (true) {
    let startIdx = roomsStr.indexOf("      {", currentPos);
    if (startIdx === -1) break;
    
    let nextIdx = roomsStr.indexOf("      {", startIdx + 1);
    let block;
    if (nextIdx === -1) {
      block = roomsStr.substring(startIdx);
      roomBlocks.push(block.trimEnd());
      break;
    } else {
      let endIdx = roomsStr.lastIndexOf("},", nextIdx);
      if (endIdx !== -1 && endIdx > startIdx) {
          block = roomsStr.substring(startIdx, endIdx + 2);
          roomBlocks.push(block);
          currentPos = endIdx + 2;
      } else {
          break;
      }
    }
  }
  
  let roomObjects = roomBlocks.map(block => {
    let match = block.match(/id:\s*(\d+)/);
    return {
      id: match ? parseInt(match[1]) : -1,
      text: block
    };
  });
  
  roomObjects.sort((a, b) => {
    return newOrder.indexOf(a.id) - newOrder.indexOf(b.id);
  });
  
  for (let i = 0; i < roomObjects.length; i++) {
    let text = roomObjects[i].text.trim();
    if (i === roomObjects.length - 1) {
      if (text.endsWith(",")) text = text.slice(0, -1);
    } else {
      if (!text.endsWith(",")) text += ",";
    }
    roomObjects[i].text = "      " + text;
  }
  
  let newRoomsStr = "\n" + roomObjects.map(r => r.text).join("\n") + "\n    ";
  content = content.substring(0, roomsStart + `rooms: [`.length) + newRoomsStr + content.substring(roomsEnd);
}

reorderArray("es");
reorderArray("en");

fs.writeFileSync(filePath, content, "utf-8");
console.log("Done");

