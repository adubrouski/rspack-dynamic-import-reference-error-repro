import { someFunction } from "./SomeFunction";

import("./Chunk")
  .then((it) => someFunction("chunk")(it))
