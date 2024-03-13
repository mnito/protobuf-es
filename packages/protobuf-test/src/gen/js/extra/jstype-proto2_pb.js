// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.2 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/jstype-proto2.proto (package spec, syntax proto2)
/* eslint-disable */

import { proto2 } from "@bufbuild/protobuf";

/**
 * @generated from message spec.JSTypeProto2OmittedMessage
 */
export const JSTypeProto2OmittedMessage = /*@__PURE__*/ proto2.makeMessageType(
  "spec.JSTypeProto2OmittedMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeProto2NormalMessage
 */
export const JSTypeProto2NormalMessage = /*@__PURE__*/ proto2.makeMessageType(
  "spec.JSTypeProto2NormalMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeProto2StringMessage
 */
export const JSTypeProto2StringMessage = /*@__PURE__*/ proto2.makeMessageType(
  "spec.JSTypeProto2StringMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, L: 1 /* LongType.STRING */, opt: true },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, opt: true },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, L: 1 /* LongType.STRING */, opt: true },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, L: 1 /* LongType.STRING */, opt: true },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, L: 1 /* LongType.STRING */, opt: true },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, L: 1 /* LongType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeProto2NumberMessage
 */
export const JSTypeProto2NumberMessage = /*@__PURE__*/ proto2.makeMessageType(
  "spec.JSTypeProto2NumberMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

