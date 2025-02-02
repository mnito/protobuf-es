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

// @generated by protoc-gen-es v1.9.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/type/localized_text.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Localized variant of a text in a particular language.
 *
 * @generated from message google.type.LocalizedText
 */
export class LocalizedText extends Message<LocalizedText> {
  /**
   * Localized string in the language corresponding to `language_code' below.
   *
   * @generated from field: string text = 1;
   */
  text = "";

  /**
   * The text's BCP-47 language code, such as "en-US" or "sr-Latn".
   *
   * For more information, see
   * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   *
   * @generated from field: string language_code = 2;
   */
  languageCode = "";

  constructor(data?: PartialMessage<LocalizedText>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.type.LocalizedText";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "language_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocalizedText {
    return new LocalizedText().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocalizedText {
    return new LocalizedText().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocalizedText {
    return new LocalizedText().fromJsonString(jsonString, options);
  }

  static equals(a: LocalizedText | PlainMessage<LocalizedText> | undefined, b: LocalizedText | PlainMessage<LocalizedText> | undefined): boolean {
    return proto3.util.equals(LocalizedText, a, b);
  }
}

