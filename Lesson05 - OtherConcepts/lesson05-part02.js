/*          *** WeakMaps ***

    * A WeakMap is a collection of key/value pairs where the keys must be objects or non-registered symbols. The values can be of any arbitrary JavaScript type.
    * Unlike regular maps (such as Map), WeakMaps do not create strong references to their keys. This means that an object’s presence as a key in a WeakMap does not prevent the object from being garbage collected.
    * Key points about WeakMaps:
        - Keys must be garbage-collectable (usually objects or non-registered symbols).
        - Values can be any JavaScript type.
        - WeakMaps allow associating data with objects without preventing the key objects from being collected.
        - They don’t allow enumeration (listing all keys) to avoid introducing non-determinism.
        - If you need a list of keys, use a Map instead. 


*/

const myWeakMap = new WeakMap();
const keyObject = {}; // An object as the key
const value = 'Some data';
myWeakMap.set(keyObject, value); // Associate data with the key



























