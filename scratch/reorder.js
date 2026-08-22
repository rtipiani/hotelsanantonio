
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "components", "RoomsPreview.tsx");
let content = fs.readFileSync(filePath, "utf-8");

// The requested order of IDs. 
// Assuming current IDs:
// 4: Habitación Matrimonial Estándar
// 5: Habitación Queen Ejecutiva
// 6: Habitación Matrimonial Superior
// 2: Habitación Individual Superior
// 7: Habitación Doble Superior
// 8: Habitación Familiar
// The remaining: 1, 3, 9, 10, 11
const newOrder = [4, 5, 6, 2, 7, 8, 1, 3, 9, 10, 11];

// We need to parse the rooms array. Since it is hard to parse TypeScript with regex, 
// we can find the indices of "{ id: X," and split the array.
// But it might be easier to use string manipulation if we carefully extract each room block.

// Let us find the start and end of `es.rooms` and `en.rooms`
function reorderArray(langStr) {
  let roomsStart = content.indexOf(`rooms: [`, content.indexOf(`${langStr}: {`));
  let roomsEnd = content.indexOf(`]\n  }`, roomsStart);
  if (roomsEnd === -1) {
    roomsEnd = content.indexOf(`]\n    }`, roomsStart);
  }
  
  let roomsStr = content.substring(roomsStart + `rooms: [`.length, roomsEnd);
  
  // Split rooms by "{ id: " or similar
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
      // The block ends before the next "      {"
      let endIdx = roomsStr.lastIndexOf("},", nextIdx);
      if (endIdx !== -1 && endIdx > startIdx) {
          block = roomsStr.substring(startIdx, endIdx + 2);
          roomBlocks.push(block);
          currentPos = endIdx + 2;
      } else {
          break; // Fallback
      }
    }
  }
  
  // For each block, find the id
  let roomObjects = roomBlocks.map(block => {
    let match = block.match(/id:\s*(\d+)/);
    return {
      id: match ? parseInt(match[1]) : -1,
      text: block
    };
  });
  
  // Sort them
  roomObjects.sort((a, b) => {
    return newOrder.indexOf(a.id) - newOrder.indexOf(b.id);
  });
  
  // Ensure the last element does not have a trailing comma, and others do
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

