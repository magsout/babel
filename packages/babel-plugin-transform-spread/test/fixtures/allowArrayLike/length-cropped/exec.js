var p2 = { 0: "b", 1: "c", 2: "d", length: 2 };

var arr = ["a", ...p2, "e"];

expect(arr).toEqual(["a", "b", "c", "e"]);
