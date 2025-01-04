export const isValidCmd = (string) => /^\s*(\w+)\s*(\s+[.-\w]+)*$/.test(string);

export const root = {
  folder1: { file1: "hi eagle", file2: "hello bird" },
  folder2: { file1: "hi lion", file2: "hello animal" },
  folder3: { file1: "hi shark", file2: "hello fish" },
};
