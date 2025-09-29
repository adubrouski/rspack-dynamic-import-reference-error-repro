const someFunction = <T>(name: keyof T) => (module: T) => {
  console.log("Requested module is", module[name]);
}

export { someFunction };
