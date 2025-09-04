var $Module$$;
$Module$$ ||= typeof Module != 'undefined' ? Module : {};
var $ENVIRONMENT_IS_WEB$$ = "object" == typeof window, $ENVIRONMENT_IS_WORKER$$ = "undefined" != typeof WorkerGlobalScope, $ENVIRONMENT_IS_NODE$$ = "object" == typeof process && process.versions?.node && "renderer" != process.type;
let $$jscomp$logical$assign$tmp362134484$0$$;
($$jscomp$logical$assign$tmp362134484$0$$ = $Module$$).expectedDataFileDownloads ?? ($$jscomp$logical$assign$tmp362134484$0$$.expectedDataFileDownloads = 0);
$Module$$.expectedDataFileDownloads++;
(() => {
  var $isWasmWorker$$ = "undefined" != typeof ENVIRONMENT_IS_WASM_WORKER && ENVIRONMENT_IS_WASM_WORKER;
  if (!("undefined" != typeof ENVIRONMENT_IS_PTHREAD && ENVIRONMENT_IS_PTHREAD || $isWasmWorker$$)) {
    var $isNode$$ = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
    (async function($metadata$$) {
      async function $fetchRemotePackage$$($packageData_packageName$$, $packageSize_total$$) {
        if ($isNode$$) {
          return (await require("fs/promises").readFile($packageData_packageName$$)).buffer;
        }
        var $$jscomp$logical$assign$tmp362134484$1_chunks$$;
        ($$jscomp$logical$assign$tmp362134484$1_chunks$$ = $Module$$).dataFileDownloads ?? ($$jscomp$logical$assign$tmp362134484$1_chunks$$.dataFileDownloads = {});
        try {
          var $reader_response$jscomp$2$$ = await fetch($packageData_packageName$$);
        } catch ($e$jscomp$7$$) {
          throw Error(`Network Error: ${$packageData_packageName$$}`, {e:$e$jscomp$7$$});
        }
        if (!$reader_response$jscomp$2$$.ok) {
          throw Error(`${$reader_response$jscomp$2$$.status}: ${$reader_response$jscomp$2$$.url}`);
        }
        $$jscomp$logical$assign$tmp362134484$1_chunks$$ = [];
        $packageSize_total$$ = Number($reader_response$jscomp$2$$.headers.get("Content-Length") ?? $packageSize_total$$);
        let $loaded$$ = 0;
        $Module$$.setStatus?.("Downloading data...");
        for ($reader_response$jscomp$2$$ = $reader_response$jscomp$2$$.body.getReader();;) {
          var {done:$done$$, value:$value$jscomp$110$$} = await $reader_response$jscomp$2$$.read();
          if ($done$$) {
            break;
          }
          $$jscomp$logical$assign$tmp362134484$1_chunks$$.push($value$jscomp$110$$);
          $loaded$$ += $value$jscomp$110$$.length;
          $Module$$.dataFileDownloads[$packageData_packageName$$] = {loaded:$loaded$$, total:$packageSize_total$$};
          let $totalLoaded$$ = 0, $totalSize$$ = 0;
          for (var $download_offset$jscomp$67$$ of Object.values($Module$$.dataFileDownloads)) {
            $totalLoaded$$ += $download_offset$jscomp$67$$.loaded, $totalSize$$ += $download_offset$jscomp$67$$.total;
          }
          $Module$$.setStatus?.(`Downloading data... (${$totalLoaded$$}/${$totalSize$$})`);
        }
        $packageData_packageName$$ = new Uint8Array($$jscomp$logical$assign$tmp362134484$1_chunks$$.map($c$$ => $c$$.length).reduce(($a$jscomp$1$$, $b$jscomp$1$$) => $a$jscomp$1$$ + $b$jscomp$1$$, 0));
        $download_offset$jscomp$67$$ = 0;
        for (const $chunk$jscomp$14$$ of $$jscomp$logical$assign$tmp362134484$1_chunks$$) {
          $packageData_packageName$$.set($chunk$jscomp$14$$, $download_offset$jscomp$67$$), $download_offset$jscomp$67$$ += $chunk$jscomp$14$$.length;
        }
        return $packageData_packageName$$.buffer;
      }
      async function $runWithFS$$($Module$jscomp$1$$) {
        function $DataRequest$$($start$jscomp$21$$, $end$jscomp$20$$, $audio$$) {
          this.start = $start$jscomp$21$$;
          this.end = $end$jscomp$20$$;
          this.audio = $audio$$;
        }
        function $processPackageData$$($arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$) {
          if (!$arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$) {
            throw Error("Loading data file failed.");
          }
          if ($arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$.constructor.name !== ArrayBuffer.name) {
            throw Error("bad input to processPackageData");
          }
          $arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$ = new Uint8Array($arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$);
          $DataRequest$$.prototype.$i$ = $arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$;
          $arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$ = $metadata$$.files;
          for (var $i$jscomp$5$$ = 0; $i$jscomp$5$$ < $arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$.length; ++$i$jscomp$5$$) {
            $DataRequest$$.prototype.$g$[$arrayBuffer_byteArray$jscomp$2_files$jscomp$1$$[$i$jscomp$5$$].filename].onload();
          }
          $Module$jscomp$1$$.removeRunDependency("datafile_CSEngineWeb.data");
        }
        $DataRequest$$.prototype = {$g$:{}, open:function($mode$jscomp$27$$, $name$jscomp$80$$) {
          this.name = $name$jscomp$80$$;
          this.$g$[$name$jscomp$80$$] = this;
          $Module$jscomp$1$$.addRunDependency(`fp ${this.name}`);
        }, send:function() {
        }, onload:function() {
          this.$h$(this.$i$.subarray(this.start, this.end));
        }, $h$:async function($byteArray$jscomp$1$$) {
          $Module$jscomp$1$$.FS_createDataFile(this.name, null, $byteArray$jscomp$1$$, !0, !0, !0);
          $Module$jscomp$1$$.removeRunDependency(`fp ${this.name}`);
          this.$g$[this.name] = null;
        }};
        for (var $files$$ = $metadata$$.files, $i$jscomp$4$$ = 0; $i$jscomp$4$$ < $files$$.length; ++$i$jscomp$4$$) {
          (new $DataRequest$$($files$$[$i$jscomp$4$$].start, $files$$[$i$jscomp$4$$].end, $files$$[$i$jscomp$4$$].audio || 0)).open("GET", $files$$[$i$jscomp$4$$].filename);
        }
        $Module$jscomp$1$$.addRunDependency("datafile_CSEngineWeb.data");
        $Module$jscomp$1$$.preloadResults ?? ($Module$jscomp$1$$.preloadResults = {});
        $Module$jscomp$1$$.preloadResults["CSEngineWeb.data"] = {$fromCache$:!1};
        $fetched$$ ? ($processPackageData$$($fetched$$), $fetched$$ = null) : $fetchedCallback$$ = $processPackageData$$;
      }
      "object" === typeof window ? window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/");
      var $REMOTE_PACKAGE_NAME$$ = $Module$$.locateFile?.("CSEngineWeb.data", "") ?? "CSEngineWeb.data", $REMOTE_PACKAGE_SIZE$$ = $metadata$$.remote_package_size, $fetchedCallback$$, $fetched$$ = $Module$$.getPreloadedPackage?.($REMOTE_PACKAGE_NAME$$, $REMOTE_PACKAGE_SIZE$$);
      $fetched$$ || $fetchRemotePackage$$($REMOTE_PACKAGE_NAME$$, $REMOTE_PACKAGE_SIZE$$).then($data$jscomp$91$$ => {
        $fetchedCallback$$ ? ($fetchedCallback$$($data$jscomp$91$$), $fetchedCallback$$ = null) : $fetched$$ = $data$jscomp$91$$;
      });
      if ($Module$$.calledRun) {
        $runWithFS$$($Module$$);
      } else {
        let $$jscomp$logical$assign$tmp362134484$3$$;
        (($$jscomp$logical$assign$tmp362134484$3$$ = $Module$$).preRun ?? ($$jscomp$logical$assign$tmp362134484$3$$.preRun = [])).push($runWithFS$$);
      }
    })({files:[{filename:"/Assets.zip", start:0, end:1448761}], remote_package_size:1448761});
  }
})();
var $thisProgram$$ = "./this.program", $quit_$$ = ($status$$, $toThrow$$) => {
  throw $toThrow$$;
}, $_scriptName$$ = "undefined" != typeof document ? document.currentScript?.src : void 0;
"undefined" != typeof __filename ? $_scriptName$$ = __filename : $ENVIRONMENT_IS_WORKER$$ && ($_scriptName$$ = self.location.href);
var $scriptDirectory$$ = "", $readAsync$$, $readBinary$$;
if ($ENVIRONMENT_IS_NODE$$) {
  var fs = require("fs");
  $scriptDirectory$$ = __dirname + "/";
  $readBinary$$ = $filename$jscomp$15$$ => {
    $filename$jscomp$15$$ = $isFileURI$$($filename$jscomp$15$$) ? new URL($filename$jscomp$15$$) : $filename$jscomp$15$$;
    return fs.readFileSync($filename$jscomp$15$$);
  };
  $readAsync$$ = async $filename$jscomp$16$$ => {
    $filename$jscomp$16$$ = $isFileURI$$($filename$jscomp$16$$) ? new URL($filename$jscomp$16$$) : $filename$jscomp$16$$;
    return fs.readFileSync($filename$jscomp$16$$, void 0);
  };
  1 < process.argv.length && ($thisProgram$$ = process.argv[1].replace(/\\/g, "/"));
  process.argv.slice(2);
  "undefined" != typeof module && (module.exports = $Module$$);
  $quit_$$ = ($status$jscomp$1$$, $toThrow$jscomp$1$$) => {
    process.exitCode = $status$jscomp$1$$;
    throw $toThrow$jscomp$1$$;
  };
} else if ($ENVIRONMENT_IS_WEB$$ || $ENVIRONMENT_IS_WORKER$$) {
  try {
    $scriptDirectory$$ = (new URL(".", $_scriptName$$)).href;
  } catch {
  }
  $ENVIRONMENT_IS_WORKER$$ && ($readBinary$$ = $url$jscomp$26$$ => {
    var $xhr$$ = new XMLHttpRequest();
    $xhr$$.open("GET", $url$jscomp$26$$, !1);
    $xhr$$.responseType = "arraybuffer";
    $xhr$$.send(null);
    return new Uint8Array($xhr$$.response);
  });
  $readAsync$$ = async $url$jscomp$27$$ => {
    if ($isFileURI$$($url$jscomp$27$$)) {
      return new Promise(($resolve$$, $reject$$) => {
        var $xhr$jscomp$1$$ = new XMLHttpRequest();
        $xhr$jscomp$1$$.open("GET", $url$jscomp$27$$, !0);
        $xhr$jscomp$1$$.responseType = "arraybuffer";
        $xhr$jscomp$1$$.onload = () => {
          200 == $xhr$jscomp$1$$.status || 0 == $xhr$jscomp$1$$.status && $xhr$jscomp$1$$.response ? $resolve$$($xhr$jscomp$1$$.response) : $reject$$($xhr$jscomp$1$$.status);
        };
        $xhr$jscomp$1$$.onerror = $reject$$;
        $xhr$jscomp$1$$.send(null);
      });
    }
    var $response$jscomp$3$$ = await fetch($url$jscomp$27$$, {credentials:"same-origin"});
    if ($response$jscomp$3$$.ok) {
      return $response$jscomp$3$$.arrayBuffer();
    }
    throw Error($response$jscomp$3$$.status + " : " + $response$jscomp$3$$.url);
  };
}
var $out$$ = console.log.bind(console), $err$$ = console.error.bind(console), $wasmBinary$$, $ABORT$$ = !1, $EXITSTATUS$$, $isFileURI$$ = $filename$jscomp$17$$ => $filename$jscomp$17$$.startsWith("file://"), $wasmMemory$$, $HEAP8$$, $HEAPU8$$, $HEAP16$$, $HEAPU16$$, $HEAP32$$, $HEAPU32$$, $HEAPF32$$, $HEAPF64$$, $HEAP64$$, $HEAPU64$$;
function $updateMemoryViews$$() {
  var $b$jscomp$2$$ = $wasmMemory$$.buffer;
  $HEAP8$$ = new Int8Array($b$jscomp$2$$);
  $HEAP16$$ = new Int16Array($b$jscomp$2$$);
  $HEAPU8$$ = new Uint8Array($b$jscomp$2$$);
  $HEAPU16$$ = new Uint16Array($b$jscomp$2$$);
  $HEAP32$$ = new Int32Array($b$jscomp$2$$);
  $HEAPU32$$ = new Uint32Array($b$jscomp$2$$);
  $HEAPF32$$ = new Float32Array($b$jscomp$2$$);
  $HEAPF64$$ = new Float64Array($b$jscomp$2$$);
  $HEAP64$$ = new BigInt64Array($b$jscomp$2$$);
  $HEAPU64$$ = new BigUint64Array($b$jscomp$2$$);
}
var $runDependencies$$ = 0, $dependenciesFulfilled$$ = null;
function $addRunDependency$$() {
  $runDependencies$$++;
  $Module$$.monitorRunDependencies?.($runDependencies$$);
}
function $removeRunDependency$$() {
  $runDependencies$$--;
  $Module$$.monitorRunDependencies?.($runDependencies$$);
  if (0 == $runDependencies$$ && $dependenciesFulfilled$$) {
    var $callback$jscomp$131$$ = $dependenciesFulfilled$$;
    $dependenciesFulfilled$$ = null;
    $callback$jscomp$131$$();
  }
}
function $abort$$($what$$) {
  $Module$$.onAbort?.($what$$);
  $what$$ = "Aborted(" + $what$$ + ")";
  $err$$($what$$);
  $ABORT$$ = !0;
  throw new WebAssembly.RuntimeError($what$$ + ". Build with -sASSERTIONS for more info.");
}
var $wasmBinaryFile$$;
async function $getWasmBinary$$($JSCompiler_inline_result$jscomp$2_binaryFile$$) {
  if (!$wasmBinary$$) {
    try {
      var $response$jscomp$4$$ = await $readAsync$$($JSCompiler_inline_result$jscomp$2_binaryFile$$);
      return new Uint8Array($response$jscomp$4$$);
    } catch {
    }
  }
  if ($JSCompiler_inline_result$jscomp$2_binaryFile$$ == $wasmBinaryFile$$ && $wasmBinary$$) {
    $JSCompiler_inline_result$jscomp$2_binaryFile$$ = new Uint8Array($wasmBinary$$);
  } else {
    if ($readBinary$$) {
      $JSCompiler_inline_result$jscomp$2_binaryFile$$ = $readBinary$$($JSCompiler_inline_result$jscomp$2_binaryFile$$);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  return $JSCompiler_inline_result$jscomp$2_binaryFile$$;
}
async function $instantiateArrayBuffer$$($binaryFile$jscomp$1$$, $imports$$) {
  try {
    var $binary$jscomp$1$$ = await $getWasmBinary$$($binaryFile$jscomp$1$$);
    return await WebAssembly.instantiate($binary$jscomp$1$$, $imports$$);
  } catch ($reason$jscomp$9$$) {
    $err$$(`failed to asynchronously prepare wasm: ${$reason$jscomp$9$$}`), $abort$$($reason$jscomp$9$$);
  }
}
async function $instantiateAsync$$($imports$jscomp$1$$) {
  var $binaryFile$jscomp$2$$ = $wasmBinaryFile$$;
  if (!$wasmBinary$$ && !$isFileURI$$($binaryFile$jscomp$2$$) && !$ENVIRONMENT_IS_NODE$$) {
    try {
      var $response$jscomp$5$$ = fetch($binaryFile$jscomp$2$$, {credentials:"same-origin"});
      return await WebAssembly.instantiateStreaming($response$jscomp$5$$, $imports$jscomp$1$$);
    } catch ($reason$jscomp$10$$) {
      $err$$(`wasm streaming compile failed: ${$reason$jscomp$10$$}`), $err$$("falling back to ArrayBuffer instantiation");
    }
  }
  return $instantiateArrayBuffer$$($binaryFile$jscomp$2$$, $imports$jscomp$1$$);
}
class $ExitStatus$$ {
  name="ExitStatus";
  constructor($status$jscomp$2$$) {
    this.message = `Program terminated with exit(${$status$jscomp$2$$})`;
    this.status = $status$jscomp$2$$;
  }
}
var $callRuntimeCallbacks$$ = $callbacks$$ => {
  for (; 0 < $callbacks$$.length;) {
    $callbacks$$.shift()($Module$$);
  }
}, $onPostRuns$$ = [], $onPreRuns$$ = [], $addOnPreRun$$ = () => {
  var $cb$jscomp$7$$ = $Module$$.preRun.shift();
  $onPreRuns$$.push($cb$jscomp$7$$);
}, $noExitRuntime$$ = !0, $UTF8Decoder$$ = new TextDecoder(), $findStringEnd$$ = ($heapOrArray$$, $idx$$, $maxBytesToRead_maxIdx$$, $ignoreNul$$) => {
  $maxBytesToRead_maxIdx$$ = $idx$$ + $maxBytesToRead_maxIdx$$;
  if ($ignoreNul$$) {
    return $maxBytesToRead_maxIdx$$;
  }
  for (; $heapOrArray$$[$idx$$] && !($idx$$ >= $maxBytesToRead_maxIdx$$);) {
    ++$idx$$;
  }
  return $idx$$;
}, $UTF8ToString$$ = ($ptr$jscomp$2$$, $maxBytesToRead$jscomp$1$$, $ignoreNul$jscomp$1$$) => $ptr$jscomp$2$$ ? $UTF8Decoder$$.decode($HEAPU8$$.subarray($ptr$jscomp$2$$, $findStringEnd$$($HEAPU8$$, $ptr$jscomp$2$$, $maxBytesToRead$jscomp$1$$, $ignoreNul$jscomp$1$$))) : "";
class $ExceptionInfo$$ {
  constructor($excPtr$$) {
    this.$ptr$ = $excPtr$$ - 24;
  }
}
var $exceptionLast$$ = 0, $uncaughtExceptionCount$$ = 0, $PATH$normalizeArray$$ = ($parts$$, $allowAboveRoot$$) => {
  for (var $up$$ = 0, $i$jscomp$6$$ = $parts$$.length - 1; 0 <= $i$jscomp$6$$; $i$jscomp$6$$--) {
    var $last$$ = $parts$$[$i$jscomp$6$$];
    "." === $last$$ ? $parts$$.splice($i$jscomp$6$$, 1) : ".." === $last$$ ? ($parts$$.splice($i$jscomp$6$$, 1), $up$$++) : $up$$ && ($parts$$.splice($i$jscomp$6$$, 1), $up$$--);
  }
  if ($allowAboveRoot$$) {
    for (; $up$$; $up$$--) {
      $parts$$.unshift("..");
    }
  }
  return $parts$$;
}, $PATH$normalize$$ = $path$jscomp$41$$ => {
  var $isAbsolute$$ = "/" === $path$jscomp$41$$.charAt(0), $trailingSlash$$ = "/" === $path$jscomp$41$$.slice(-1);
  ($path$jscomp$41$$ = $PATH$normalizeArray$$($path$jscomp$41$$.split("/").filter($p$jscomp$4$$ => !!$p$jscomp$4$$), !$isAbsolute$$).join("/")) || $isAbsolute$$ || ($path$jscomp$41$$ = ".");
  $path$jscomp$41$$ && $trailingSlash$$ && ($path$jscomp$41$$ += "/");
  return ($isAbsolute$$ ? "/" : "") + $path$jscomp$41$$;
}, $PATH$dirname$$ = $path$jscomp$42_root$jscomp$3$$ => {
  var $dir_result$jscomp$3$$ = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec($path$jscomp$42_root$jscomp$3$$).slice(1);
  $path$jscomp$42_root$jscomp$3$$ = $dir_result$jscomp$3$$[0];
  $dir_result$jscomp$3$$ = $dir_result$jscomp$3$$[1];
  if (!$path$jscomp$42_root$jscomp$3$$ && !$dir_result$jscomp$3$$) {
    return ".";
  }
  $dir_result$jscomp$3$$ &&= $dir_result$jscomp$3$$.slice(0, -1);
  return $path$jscomp$42_root$jscomp$3$$ + $dir_result$jscomp$3$$;
}, $initRandomFill$$ = () => {
  if ($ENVIRONMENT_IS_NODE$$) {
    var $nodeCrypto$$ = require("crypto");
    return $view$jscomp$5$$ => $nodeCrypto$$.randomFillSync($view$jscomp$5$$);
  }
  return $view$jscomp$6$$ => crypto.getRandomValues($view$jscomp$6$$);
}, $randomFill$$ = $view$jscomp$7$$ => {
  ($randomFill$$ = $initRandomFill$$())($view$jscomp$7$$);
}, $PATH_FS$resolve$$ = (...$args$jscomp$6$$) => {
  for (var $resolvedPath$$ = "", $path$jscomp$44_resolvedAbsolute$$ = !1, $i$jscomp$7$$ = $args$jscomp$6$$.length - 1; -1 <= $i$jscomp$7$$ && !$path$jscomp$44_resolvedAbsolute$$; $i$jscomp$7$$--) {
    $path$jscomp$44_resolvedAbsolute$$ = 0 <= $i$jscomp$7$$ ? $args$jscomp$6$$[$i$jscomp$7$$] : "/";
    if ("string" != typeof $path$jscomp$44_resolvedAbsolute$$) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!$path$jscomp$44_resolvedAbsolute$$) {
      return "";
    }
    $resolvedPath$$ = $path$jscomp$44_resolvedAbsolute$$ + "/" + $resolvedPath$$;
    $path$jscomp$44_resolvedAbsolute$$ = "/" === $path$jscomp$44_resolvedAbsolute$$.charAt(0);
  }
  $resolvedPath$$ = $PATH$normalizeArray$$($resolvedPath$$.split("/").filter($p$jscomp$5$$ => !!$p$jscomp$5$$), !$path$jscomp$44_resolvedAbsolute$$).join("/");
  return ($path$jscomp$44_resolvedAbsolute$$ ? "/" : "") + $resolvedPath$$ || ".";
}, $UTF8ArrayToString$$ = $heapOrArray$jscomp$1$$ => {
  var $endPtr$$ = $findStringEnd$$($heapOrArray$jscomp$1$$, 0);
  return $UTF8Decoder$$.decode($heapOrArray$jscomp$1$$.buffer ? $heapOrArray$jscomp$1$$.subarray(0, $endPtr$$) : new Uint8Array($heapOrArray$jscomp$1$$.slice(0, $endPtr$$)));
}, $FS_stdin_getChar_buffer$$ = [], $lengthBytesUTF8$$ = $str$jscomp$9$$ => {
  for (var $len$jscomp$3$$ = 0, $i$jscomp$9$$ = 0; $i$jscomp$9$$ < $str$jscomp$9$$.length; ++$i$jscomp$9$$) {
    var $c$jscomp$1$$ = $str$jscomp$9$$.charCodeAt($i$jscomp$9$$);
    127 >= $c$jscomp$1$$ ? $len$jscomp$3$$++ : 2047 >= $c$jscomp$1$$ ? $len$jscomp$3$$ += 2 : 55296 <= $c$jscomp$1$$ && 57343 >= $c$jscomp$1$$ ? ($len$jscomp$3$$ += 4, ++$i$jscomp$9$$) : $len$jscomp$3$$ += 3;
  }
  return $len$jscomp$3$$;
}, $stringToUTF8Array$$ = ($str$jscomp$10$$, $heap$$, $outIdx$$, $endIdx_maxBytesToWrite$$) => {
  if (!(0 < $endIdx_maxBytesToWrite$$)) {
    return 0;
  }
  var $startIdx$$ = $outIdx$$;
  $endIdx_maxBytesToWrite$$ = $outIdx$$ + $endIdx_maxBytesToWrite$$ - 1;
  for (var $i$jscomp$10$$ = 0; $i$jscomp$10$$ < $str$jscomp$10$$.length; ++$i$jscomp$10$$) {
    var $u$$ = $str$jscomp$10$$.codePointAt($i$jscomp$10$$);
    if (127 >= $u$$) {
      if ($outIdx$$ >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = $u$$;
    } else if (2047 >= $u$$) {
      if ($outIdx$$ + 1 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 192 | $u$$ >> 6;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
    } else if (65535 >= $u$$) {
      if ($outIdx$$ + 2 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 224 | $u$$ >> 12;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 6 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
    } else {
      if ($outIdx$$ + 3 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 240 | $u$$ >> 18;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 12 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 6 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
      $i$jscomp$10$$++;
    }
  }
  $heap$$[$outIdx$$] = 0;
  return $outIdx$$ - $startIdx$$;
}, $intArrayFromString$$ = $numBytesWritten_stringy$$ => {
  var $u8array$$ = Array($lengthBytesUTF8$$($numBytesWritten_stringy$$) + 1);
  $numBytesWritten_stringy$$ = $stringToUTF8Array$$($numBytesWritten_stringy$$, $u8array$$, 0, $u8array$$.length);
  $u8array$$.length = $numBytesWritten_stringy$$;
  return $u8array$$;
}, $TTY$ttys$$ = [];
function $TTY$register$$($dev$$, $ops$$) {
  $TTY$ttys$$[$dev$$] = {input:[], output:[], $ops$:$ops$$};
  $FS$registerDevice$$($dev$$, $TTY$stream_ops$$);
}
var $TTY$stream_ops$$ = {open($stream$jscomp$6$$) {
  var $tty$jscomp$1$$ = $TTY$ttys$$[$stream$jscomp$6$$.node.rdev];
  if (!$tty$jscomp$1$$) {
    throw new $FS$ErrnoError$$(43);
  }
  $stream$jscomp$6$$.tty = $tty$jscomp$1$$;
  $stream$jscomp$6$$.seekable = !1;
}, close($stream$jscomp$7$$) {
  $stream$jscomp$7$$.tty.$ops$.fsync($stream$jscomp$7$$.tty);
}, fsync($stream$jscomp$8$$) {
  $stream$jscomp$8$$.tty.$ops$.fsync($stream$jscomp$8$$.tty);
}, read($stream$jscomp$9$$, $buffer$jscomp$27$$, $offset$jscomp$68$$, $length$jscomp$27$$) {
  if (!$stream$jscomp$9$$.tty || !$stream$jscomp$9$$.tty.$ops$.$get_char$) {
    throw new $FS$ErrnoError$$(60);
  }
  for (var $bytesRead$jscomp$1$$ = 0, $i$jscomp$11$$ = 0; $i$jscomp$11$$ < $length$jscomp$27$$; $i$jscomp$11$$++) {
    try {
      var $result$jscomp$5$$ = $stream$jscomp$9$$.tty.$ops$.$get_char$($stream$jscomp$9$$.tty);
    } catch ($e$jscomp$10$$) {
      throw new $FS$ErrnoError$$(29);
    }
    if (void 0 === $result$jscomp$5$$ && 0 === $bytesRead$jscomp$1$$) {
      throw new $FS$ErrnoError$$(6);
    }
    if (null === $result$jscomp$5$$ || void 0 === $result$jscomp$5$$) {
      break;
    }
    $bytesRead$jscomp$1$$++;
    $buffer$jscomp$27$$[$offset$jscomp$68$$ + $i$jscomp$11$$] = $result$jscomp$5$$;
  }
  $bytesRead$jscomp$1$$ && ($stream$jscomp$9$$.node.atime = Date.now());
  return $bytesRead$jscomp$1$$;
}, write($stream$jscomp$10$$, $buffer$jscomp$28$$, $offset$jscomp$69$$, $length$jscomp$28$$) {
  if (!$stream$jscomp$10$$.tty || !$stream$jscomp$10$$.tty.$ops$.$put_char$) {
    throw new $FS$ErrnoError$$(60);
  }
  try {
    for (var $i$jscomp$12$$ = 0; $i$jscomp$12$$ < $length$jscomp$28$$; $i$jscomp$12$$++) {
      $stream$jscomp$10$$.tty.$ops$.$put_char$($stream$jscomp$10$$.tty, $buffer$jscomp$28$$[$offset$jscomp$69$$ + $i$jscomp$12$$]);
    }
  } catch ($e$jscomp$11$$) {
    throw new $FS$ErrnoError$$(29);
  }
  $length$jscomp$28$$ && ($stream$jscomp$10$$.node.mtime = $stream$jscomp$10$$.node.ctime = Date.now());
  return $i$jscomp$12$$;
}}, $TTY$default_tty_ops$$ = {$get_char$() {
  a: {
    if (!$FS_stdin_getChar_buffer$$.length) {
      var $JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ = null;
      if ($ENVIRONMENT_IS_NODE$$) {
        var $buf$jscomp$inline_39$$ = Buffer.alloc(256), $bytesRead$jscomp$inline_40$$ = 0, $fd$jscomp$inline_41$$ = process.stdin.fd;
        try {
          $bytesRead$jscomp$inline_40$$ = fs.readSync($fd$jscomp$inline_41$$, $buf$jscomp$inline_39$$, 0, 256);
        } catch ($e$jscomp$inline_42$$) {
          if ($e$jscomp$inline_42$$.toString().includes("EOF")) {
            $bytesRead$jscomp$inline_40$$ = 0;
          } else {
            throw $e$jscomp$inline_42$$;
          }
        }
        0 < $bytesRead$jscomp$inline_40$$ && ($JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ = $buf$jscomp$inline_39$$.slice(0, $bytesRead$jscomp$inline_40$$).toString("utf-8"));
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt && ($JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ = window.prompt("Input: "), null !== $JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ && ($JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ += "\n"));
      }
      if (!$JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$) {
        $JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ = null;
        break a;
      }
      $FS_stdin_getChar_buffer$$ = $intArrayFromString$$($JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$);
    }
    $JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$ = $FS_stdin_getChar_buffer$$.shift();
  }
  return $JSCompiler_inline_result$jscomp$3_result$jscomp$inline_38$$;
}, $put_char$($tty$jscomp$3$$, $val$jscomp$1$$) {
  null === $val$jscomp$1$$ || 10 === $val$jscomp$1$$ ? ($out$$($UTF8ArrayToString$$($tty$jscomp$3$$.output)), $tty$jscomp$3$$.output = []) : 0 != $val$jscomp$1$$ && $tty$jscomp$3$$.output.push($val$jscomp$1$$);
}, fsync($tty$jscomp$4$$) {
  0 < $tty$jscomp$4$$.output?.length && ($out$$($UTF8ArrayToString$$($tty$jscomp$4$$.output)), $tty$jscomp$4$$.output = []);
}, $ioctl_tcgets$() {
  return {$c_iflag$:25856, $c_oflag$:5, $c_cflag$:191, $c_lflag$:35387, $c_cc$:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
}, $ioctl_tcsets$() {
  return 0;
}, $ioctl_tiocgwinsz$() {
  return [24, 80];
}}, $TTY$default_tty1_ops$$ = {$put_char$($tty$jscomp$8$$, $val$jscomp$2$$) {
  null === $val$jscomp$2$$ || 10 === $val$jscomp$2$$ ? ($err$$($UTF8ArrayToString$$($tty$jscomp$8$$.output)), $tty$jscomp$8$$.output = []) : 0 != $val$jscomp$2$$ && $tty$jscomp$8$$.output.push($val$jscomp$2$$);
}, fsync($tty$jscomp$9$$) {
  0 < $tty$jscomp$9$$.output?.length && ($err$$($UTF8ArrayToString$$($tty$jscomp$9$$.output)), $tty$jscomp$9$$.output = []);
}}, $MEMFS$$ = {$ops_table$:null, $mount$() {
  return $MEMFS$$.createNode(null, "/", 16895, 0);
}, createNode($parent$jscomp$4$$, $name$jscomp$81$$, $mode$jscomp$28_node$jscomp$5$$, $dev$jscomp$1$$) {
  if (24576 === ($mode$jscomp$28_node$jscomp$5$$ & 61440) || 4096 === ($mode$jscomp$28_node$jscomp$5$$ & 61440)) {
    throw new $FS$ErrnoError$$(63);
  }
  $MEMFS$$.$ops_table$ || ($MEMFS$$.$ops_table$ = {dir:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$, lookup:$MEMFS$$.$node_ops$.lookup, $mknod$:$MEMFS$$.$node_ops$.$mknod$, rename:$MEMFS$$.$node_ops$.rename, unlink:$MEMFS$$.$node_ops$.unlink, rmdir:$MEMFS$$.$node_ops$.rmdir, readdir:$MEMFS$$.$node_ops$.readdir, symlink:$MEMFS$$.$node_ops$.symlink}, stream:{$llseek$:$MEMFS$$.$stream_ops$.$llseek$}}, file:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$}, 
  stream:{$llseek$:$MEMFS$$.$stream_ops$.$llseek$, read:$MEMFS$$.$stream_ops$.read, write:$MEMFS$$.$stream_ops$.write, $mmap$:$MEMFS$$.$stream_ops$.$mmap$, $msync$:$MEMFS$$.$stream_ops$.$msync$}}, link:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$, readlink:$MEMFS$$.$node_ops$.readlink}, stream:{}}, $chrdev$:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$}, stream:$FS$chrdev_stream_ops$$}});
  $mode$jscomp$28_node$jscomp$5$$ = $FS$createNode$$($parent$jscomp$4$$, $name$jscomp$81$$, $mode$jscomp$28_node$jscomp$5$$, $dev$jscomp$1$$);
  $FS$isDir$$($mode$jscomp$28_node$jscomp$5$$.mode) ? ($mode$jscomp$28_node$jscomp$5$$.$node_ops$ = $MEMFS$$.$ops_table$.dir.node, $mode$jscomp$28_node$jscomp$5$$.$stream_ops$ = $MEMFS$$.$ops_table$.dir.stream, $mode$jscomp$28_node$jscomp$5$$.$contents$ = {}) : 32768 === ($mode$jscomp$28_node$jscomp$5$$.mode & 61440) ? ($mode$jscomp$28_node$jscomp$5$$.$node_ops$ = $MEMFS$$.$ops_table$.file.node, $mode$jscomp$28_node$jscomp$5$$.$stream_ops$ = $MEMFS$$.$ops_table$.file.stream, $mode$jscomp$28_node$jscomp$5$$.$usedBytes$ = 
  0, $mode$jscomp$28_node$jscomp$5$$.$contents$ = null) : 40960 === ($mode$jscomp$28_node$jscomp$5$$.mode & 61440) ? ($mode$jscomp$28_node$jscomp$5$$.$node_ops$ = $MEMFS$$.$ops_table$.link.node, $mode$jscomp$28_node$jscomp$5$$.$stream_ops$ = $MEMFS$$.$ops_table$.link.stream) : 8192 === ($mode$jscomp$28_node$jscomp$5$$.mode & 61440) && ($mode$jscomp$28_node$jscomp$5$$.$node_ops$ = $MEMFS$$.$ops_table$.$chrdev$.node, $mode$jscomp$28_node$jscomp$5$$.$stream_ops$ = $MEMFS$$.$ops_table$.$chrdev$.stream);
  $mode$jscomp$28_node$jscomp$5$$.atime = $mode$jscomp$28_node$jscomp$5$$.mtime = $mode$jscomp$28_node$jscomp$5$$.ctime = Date.now();
  $parent$jscomp$4$$ && ($parent$jscomp$4$$.$contents$[$name$jscomp$81$$] = $mode$jscomp$28_node$jscomp$5$$, $parent$jscomp$4$$.atime = $parent$jscomp$4$$.mtime = $parent$jscomp$4$$.ctime = $mode$jscomp$28_node$jscomp$5$$.atime);
  return $mode$jscomp$28_node$jscomp$5$$;
}, $getFileDataAsTypedArray$($node$jscomp$6$$) {
  return $node$jscomp$6$$.$contents$ ? $node$jscomp$6$$.$contents$.subarray ? $node$jscomp$6$$.$contents$.subarray(0, $node$jscomp$6$$.$usedBytes$) : new Uint8Array($node$jscomp$6$$.$contents$) : new Uint8Array(0);
}, $node_ops$:{$getattr$($node$jscomp$9$$) {
  var $attr$$ = {};
  $attr$$.dev = 8192 === ($node$jscomp$9$$.mode & 61440) ? $node$jscomp$9$$.id : 1;
  $attr$$.ino = $node$jscomp$9$$.id;
  $attr$$.mode = $node$jscomp$9$$.mode;
  $attr$$.nlink = 1;
  $attr$$.uid = 0;
  $attr$$.gid = 0;
  $attr$$.rdev = $node$jscomp$9$$.rdev;
  $FS$isDir$$($node$jscomp$9$$.mode) ? $attr$$.size = 4096 : 32768 === ($node$jscomp$9$$.mode & 61440) ? $attr$$.size = $node$jscomp$9$$.$usedBytes$ : 40960 === ($node$jscomp$9$$.mode & 61440) ? $attr$$.size = $node$jscomp$9$$.link.length : $attr$$.size = 0;
  $attr$$.atime = new Date($node$jscomp$9$$.atime);
  $attr$$.mtime = new Date($node$jscomp$9$$.mtime);
  $attr$$.ctime = new Date($node$jscomp$9$$.ctime);
  $attr$$.blksize = 4096;
  $attr$$.blocks = Math.ceil($attr$$.size / $attr$$.blksize);
  return $attr$$;
}, $setattr$($node$jscomp$10$$, $attr$jscomp$1_newSize$jscomp$inline_45$$) {
  for (var $key$jscomp$40_oldContents$jscomp$inline_47$$ of ["mode", "atime", "mtime", "ctime"]) {
    null != $attr$jscomp$1_newSize$jscomp$inline_45$$[$key$jscomp$40_oldContents$jscomp$inline_47$$] && ($node$jscomp$10$$[$key$jscomp$40_oldContents$jscomp$inline_47$$] = $attr$jscomp$1_newSize$jscomp$inline_45$$[$key$jscomp$40_oldContents$jscomp$inline_47$$]);
  }
  void 0 !== $attr$jscomp$1_newSize$jscomp$inline_45$$.size && ($attr$jscomp$1_newSize$jscomp$inline_45$$ = $attr$jscomp$1_newSize$jscomp$inline_45$$.size, $node$jscomp$10$$.$usedBytes$ != $attr$jscomp$1_newSize$jscomp$inline_45$$ && (0 == $attr$jscomp$1_newSize$jscomp$inline_45$$ ? ($node$jscomp$10$$.$contents$ = null, $node$jscomp$10$$.$usedBytes$ = 0) : ($key$jscomp$40_oldContents$jscomp$inline_47$$ = $node$jscomp$10$$.$contents$, $node$jscomp$10$$.$contents$ = new Uint8Array($attr$jscomp$1_newSize$jscomp$inline_45$$), 
  $key$jscomp$40_oldContents$jscomp$inline_47$$ && $node$jscomp$10$$.$contents$.set($key$jscomp$40_oldContents$jscomp$inline_47$$.subarray(0, Math.min($attr$jscomp$1_newSize$jscomp$inline_45$$, $node$jscomp$10$$.$usedBytes$))), $node$jscomp$10$$.$usedBytes$ = $attr$jscomp$1_newSize$jscomp$inline_45$$)));
}, lookup() {
  $MEMFS$$.$doesNotExistError$ || ($MEMFS$$.$doesNotExistError$ = new $FS$ErrnoError$$(44), $MEMFS$$.$doesNotExistError$.stack = "<generic error, no stack>");
  throw $MEMFS$$.$doesNotExistError$;
}, $mknod$($parent$jscomp$6$$, $name$jscomp$83$$, $mode$jscomp$29$$, $dev$jscomp$2$$) {
  return $MEMFS$$.createNode($parent$jscomp$6$$, $name$jscomp$83$$, $mode$jscomp$29$$, $dev$jscomp$2$$);
}, rename($old_node$$, $new_dir$$, $new_name$$) {
  try {
    var $new_node$$ = $FS$lookupNode$$($new_dir$$, $new_name$$);
  } catch ($e$jscomp$12$$) {
  }
  if ($new_node$$) {
    if ($FS$isDir$$($old_node$$.mode)) {
      for (var $i$jscomp$13$$ in $new_node$$.$contents$) {
        throw new $FS$ErrnoError$$(55);
      }
    }
    $FS$hashRemoveNode$$($new_node$$);
  }
  delete $old_node$$.parent.$contents$[$old_node$$.name];
  $new_dir$$.$contents$[$new_name$$] = $old_node$$;
  $old_node$$.name = $new_name$$;
  $new_dir$$.ctime = $new_dir$$.mtime = $old_node$$.parent.ctime = $old_node$$.parent.mtime = Date.now();
}, unlink($parent$jscomp$7$$, $name$jscomp$84$$) {
  delete $parent$jscomp$7$$.$contents$[$name$jscomp$84$$];
  $parent$jscomp$7$$.ctime = $parent$jscomp$7$$.mtime = Date.now();
}, rmdir($parent$jscomp$8$$, $name$jscomp$85$$) {
  var $node$jscomp$11$$ = $FS$lookupNode$$($parent$jscomp$8$$, $name$jscomp$85$$), $i$jscomp$14$$;
  for ($i$jscomp$14$$ in $node$jscomp$11$$.$contents$) {
    throw new $FS$ErrnoError$$(55);
  }
  delete $parent$jscomp$8$$.$contents$[$name$jscomp$85$$];
  $parent$jscomp$8$$.ctime = $parent$jscomp$8$$.mtime = Date.now();
}, readdir($node$jscomp$12$$) {
  return [".", "..", ...Object.keys($node$jscomp$12$$.$contents$)];
}, symlink($node$jscomp$13_parent$jscomp$9$$, $newname$$, $oldpath$$) {
  $node$jscomp$13_parent$jscomp$9$$ = $MEMFS$$.createNode($node$jscomp$13_parent$jscomp$9$$, $newname$$, 41471, 0);
  $node$jscomp$13_parent$jscomp$9$$.link = $oldpath$$;
  return $node$jscomp$13_parent$jscomp$9$$;
}, readlink($node$jscomp$14$$) {
  if (40960 !== ($node$jscomp$14$$.mode & 61440)) {
    throw new $FS$ErrnoError$$(28);
  }
  return $node$jscomp$14$$.link;
}}, $stream_ops$:{read($size$jscomp$24_stream$jscomp$11$$, $buffer$jscomp$29$$, $offset$jscomp$70$$, $i$jscomp$15_length$jscomp$29$$, $position$jscomp$5$$) {
  var $contents$jscomp$3$$ = $size$jscomp$24_stream$jscomp$11$$.node.$contents$;
  if ($position$jscomp$5$$ >= $size$jscomp$24_stream$jscomp$11$$.node.$usedBytes$) {
    return 0;
  }
  $size$jscomp$24_stream$jscomp$11$$ = Math.min($size$jscomp$24_stream$jscomp$11$$.node.$usedBytes$ - $position$jscomp$5$$, $i$jscomp$15_length$jscomp$29$$);
  if (8 < $size$jscomp$24_stream$jscomp$11$$ && $contents$jscomp$3$$.subarray) {
    $buffer$jscomp$29$$.set($contents$jscomp$3$$.subarray($position$jscomp$5$$, $position$jscomp$5$$ + $size$jscomp$24_stream$jscomp$11$$), $offset$jscomp$70$$);
  } else {
    for ($i$jscomp$15_length$jscomp$29$$ = 0; $i$jscomp$15_length$jscomp$29$$ < $size$jscomp$24_stream$jscomp$11$$; $i$jscomp$15_length$jscomp$29$$++) {
      $buffer$jscomp$29$$[$offset$jscomp$70$$ + $i$jscomp$15_length$jscomp$29$$] = $contents$jscomp$3$$[$position$jscomp$5$$ + $i$jscomp$15_length$jscomp$29$$];
    }
  }
  return $size$jscomp$24_stream$jscomp$11$$;
}, write($node$jscomp$15_stream$jscomp$12$$, $buffer$jscomp$30$$, $offset$jscomp$71$$, $length$jscomp$30$$, $position$jscomp$6$$, $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$) {
  $buffer$jscomp$30$$.buffer === $HEAP8$$.buffer && ($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ = !1);
  if (!$length$jscomp$30$$) {
    return 0;
  }
  $node$jscomp$15_stream$jscomp$12$$ = $node$jscomp$15_stream$jscomp$12$$.node;
  $node$jscomp$15_stream$jscomp$12$$.mtime = $node$jscomp$15_stream$jscomp$12$$.ctime = Date.now();
  if ($buffer$jscomp$30$$.subarray && (!$node$jscomp$15_stream$jscomp$12$$.$contents$ || $node$jscomp$15_stream$jscomp$12$$.$contents$.subarray)) {
    if ($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$) {
      return $node$jscomp$15_stream$jscomp$12$$.$contents$ = $buffer$jscomp$30$$.subarray($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$30$$), $node$jscomp$15_stream$jscomp$12$$.$usedBytes$ = $length$jscomp$30$$;
    }
    if (0 === $node$jscomp$15_stream$jscomp$12$$.$usedBytes$ && 0 === $position$jscomp$6$$) {
      return $node$jscomp$15_stream$jscomp$12$$.$contents$ = $buffer$jscomp$30$$.slice($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$30$$), $node$jscomp$15_stream$jscomp$12$$.$usedBytes$ = $length$jscomp$30$$;
    }
    if ($position$jscomp$6$$ + $length$jscomp$30$$ <= $node$jscomp$15_stream$jscomp$12$$.$usedBytes$) {
      return $node$jscomp$15_stream$jscomp$12$$.$contents$.set($buffer$jscomp$30$$.subarray($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$30$$), $position$jscomp$6$$), $length$jscomp$30$$;
    }
  }
  $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ = $position$jscomp$6$$ + $length$jscomp$30$$;
  var $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ = $node$jscomp$15_stream$jscomp$12$$.$contents$ ? $node$jscomp$15_stream$jscomp$12$$.$contents$.length : 0;
  $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ >= $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ || ($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ = Math.max($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$, $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ * (1048576 > $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ ? 2.0 : 1.125) >>> 0), 0 != $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ && ($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ = 
  Math.max($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$, 256)), $oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$ = $node$jscomp$15_stream$jscomp$12$$.$contents$, $node$jscomp$15_stream$jscomp$12$$.$contents$ = new Uint8Array($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$), 0 < $node$jscomp$15_stream$jscomp$12$$.$usedBytes$ && $node$jscomp$15_stream$jscomp$12$$.$contents$.set($oldContents$jscomp$inline_53_prevCapacity$jscomp$inline_52$$.subarray(0, $node$jscomp$15_stream$jscomp$12$$.$usedBytes$), 
  0));
  if ($node$jscomp$15_stream$jscomp$12$$.$contents$.subarray && $buffer$jscomp$30$$.subarray) {
    $node$jscomp$15_stream$jscomp$12$$.$contents$.set($buffer$jscomp$30$$.subarray($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$30$$), $position$jscomp$6$$);
  } else {
    for ($canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ = 0; $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$ < $length$jscomp$30$$; $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$++) {
      $node$jscomp$15_stream$jscomp$12$$.$contents$[$position$jscomp$6$$ + $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$] = $buffer$jscomp$30$$[$offset$jscomp$71$$ + $canOwn_i$jscomp$16_newCapacity$jscomp$inline_50$$];
    }
  }
  $node$jscomp$15_stream$jscomp$12$$.$usedBytes$ = Math.max($node$jscomp$15_stream$jscomp$12$$.$usedBytes$, $position$jscomp$6$$ + $length$jscomp$30$$);
  return $length$jscomp$30$$;
}, $llseek$($stream$jscomp$13$$, $offset$jscomp$72_position$jscomp$7$$, $whence$$) {
  1 === $whence$$ ? $offset$jscomp$72_position$jscomp$7$$ += $stream$jscomp$13$$.position : 2 === $whence$$ && 32768 === ($stream$jscomp$13$$.node.mode & 61440) && ($offset$jscomp$72_position$jscomp$7$$ += $stream$jscomp$13$$.node.$usedBytes$);
  if (0 > $offset$jscomp$72_position$jscomp$7$$) {
    throw new $FS$ErrnoError$$(28);
  }
  return $offset$jscomp$72_position$jscomp$7$$;
}, $mmap$($contents$jscomp$4_stream$jscomp$14$$, $length$jscomp$31$$, $position$jscomp$8$$, $allocated_prot$$, $flags$jscomp$9_ptr$jscomp$4$$) {
  if (32768 !== ($contents$jscomp$4_stream$jscomp$14$$.node.mode & 61440)) {
    throw new $FS$ErrnoError$$(43);
  }
  $contents$jscomp$4_stream$jscomp$14$$ = $contents$jscomp$4_stream$jscomp$14$$.node.$contents$;
  if ($flags$jscomp$9_ptr$jscomp$4$$ & 2 || !$contents$jscomp$4_stream$jscomp$14$$ || $contents$jscomp$4_stream$jscomp$14$$.buffer !== $HEAP8$$.buffer) {
    $allocated_prot$$ = !0;
    $abort$$();
    $flags$jscomp$9_ptr$jscomp$4$$ = void 0;
    if (!$flags$jscomp$9_ptr$jscomp$4$$) {
      throw new $FS$ErrnoError$$(48);
    }
    if ($contents$jscomp$4_stream$jscomp$14$$) {
      if (0 < $position$jscomp$8$$ || $position$jscomp$8$$ + $length$jscomp$31$$ < $contents$jscomp$4_stream$jscomp$14$$.length) {
        $contents$jscomp$4_stream$jscomp$14$$.subarray ? $contents$jscomp$4_stream$jscomp$14$$ = $contents$jscomp$4_stream$jscomp$14$$.subarray($position$jscomp$8$$, $position$jscomp$8$$ + $length$jscomp$31$$) : $contents$jscomp$4_stream$jscomp$14$$ = Array.prototype.slice.call($contents$jscomp$4_stream$jscomp$14$$, $position$jscomp$8$$, $position$jscomp$8$$ + $length$jscomp$31$$);
      }
      $HEAP8$$.set($contents$jscomp$4_stream$jscomp$14$$, $flags$jscomp$9_ptr$jscomp$4$$);
    }
  } else {
    $allocated_prot$$ = !1, $flags$jscomp$9_ptr$jscomp$4$$ = $contents$jscomp$4_stream$jscomp$14$$.byteOffset;
  }
  return {$ptr$:$flags$jscomp$9_ptr$jscomp$4$$, $allocated$:$allocated_prot$$};
}, $msync$($stream$jscomp$15$$, $buffer$jscomp$31$$, $offset$jscomp$73$$, $length$jscomp$32$$) {
  $MEMFS$$.$stream_ops$.write($stream$jscomp$15$$, $buffer$jscomp$31$$, 0, $length$jscomp$32$$, $offset$jscomp$73$$, !1);
  return 0;
}}}, $FS_getMode$$ = ($canRead$$, $canWrite$$) => {
  var $mode$jscomp$30$$ = 0;
  $canRead$$ && ($mode$jscomp$30$$ |= 365);
  $canWrite$$ && ($mode$jscomp$30$$ |= 146);
  return $mode$jscomp$30$$;
}, $asyncLoad$$ = async $arrayBuffer$jscomp$1_url$jscomp$28$$ => {
  $arrayBuffer$jscomp$1_url$jscomp$28$$ = await $readAsync$$($arrayBuffer$jscomp$1_url$jscomp$28$$);
  return new Uint8Array($arrayBuffer$jscomp$1_url$jscomp$28$$);
}, $preloadPlugins$$ = [], $FS_handledByPreloadPlugin$$ = async($byteArray$jscomp$3$$, $fullname$$) => {
  "undefined" != typeof $Browser$$ && $Browser$init$$();
  for (var $plugin$$ of $preloadPlugins$$) {
    if ($plugin$$.canHandle($fullname$$)) {
      return $plugin$$.handle($byteArray$jscomp$3$$, $fullname$$);
    }
  }
  return $byteArray$jscomp$3$$;
}, $FS$root$$ = null, $FS$devices$$ = {}, $FS$streams$$ = [], $FS$nextInode$$ = 1, $FS$nameTable$$ = null, $FS$initialized$$ = !1, $FS$ignorePermissions$$ = !0, $FS$readFiles$$ = {}, $FS$ErrnoError$$ = class {
  name="ErrnoError";
  constructor($errno$$) {
    this.$errno$ = $errno$$;
  }
}, $FS$FSStream$$ = class {
  $g$={};
  node=null;
  get flags() {
    return this.$g$.flags;
  }
  set flags($val$jscomp$4$$) {
    this.$g$.flags = $val$jscomp$4$$;
  }
  get position() {
    return this.$g$.position;
  }
  set position($val$jscomp$5$$) {
    this.$g$.position = $val$jscomp$5$$;
  }
}, $FS$FSNode$$ = class {
  $node_ops$={};
  $stream_ops$={};
  $mounted$=null;
  constructor($parent$jscomp$12$$, $name$jscomp$88$$, $mode$jscomp$31$$, $rdev$$) {
    $parent$jscomp$12$$ ||= this;
    this.parent = $parent$jscomp$12$$;
    this.$mount$ = $parent$jscomp$12$$.$mount$;
    this.id = $FS$nextInode$$++;
    this.name = $name$jscomp$88$$;
    this.mode = $mode$jscomp$31$$;
    this.rdev = $rdev$$;
    this.atime = this.mtime = this.ctime = Date.now();
  }
  get read() {
    return 365 === (this.mode & 365);
  }
  set read($val$jscomp$6$$) {
    $val$jscomp$6$$ ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return 146 === (this.mode & 146);
  }
  set write($val$jscomp$7$$) {
    $val$jscomp$7$$ ? this.mode |= 146 : this.mode &= -147;
  }
  get $isFolder$() {
    return $FS$isDir$$(this.mode);
  }
  get $isDevice$() {
    return 8192 === (this.mode & 61440);
  }
};
function $FS$lookupPath$$($parts$jscomp$1_path$jscomp$45$$, $opts$$ = {}) {
  if (!$parts$jscomp$1_path$jscomp$45$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $opts$$.$follow_mount$ ?? ($opts$$.$follow_mount$ = !0);
  "/" === $parts$jscomp$1_path$jscomp$45$$.charAt(0) || ($parts$jscomp$1_path$jscomp$45$$ = "//" + $parts$jscomp$1_path$jscomp$45$$);
  var $nlinks$$ = 0;
  a: for (; 40 > $nlinks$$; $nlinks$$++) {
    $parts$jscomp$1_path$jscomp$45$$ = $parts$jscomp$1_path$jscomp$45$$.split("/").filter($p$jscomp$6$$ => !!$p$jscomp$6$$);
    for (var $current_link$$ = $FS$root$$, $current_path$$ = "/", $i$jscomp$17$$ = 0; $i$jscomp$17$$ < $parts$jscomp$1_path$jscomp$45$$.length; $i$jscomp$17$$++) {
      var $islast$$ = $i$jscomp$17$$ === $parts$jscomp$1_path$jscomp$45$$.length - 1;
      if ($islast$$ && $opts$$.parent) {
        break;
      }
      if ("." !== $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$17$$]) {
        if (".." === $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$17$$]) {
          if ($current_path$$ = $PATH$dirname$$($current_path$$), $current_link$$ === $current_link$$.parent) {
            $parts$jscomp$1_path$jscomp$45$$ = $current_path$$ + "/" + $parts$jscomp$1_path$jscomp$45$$.slice($i$jscomp$17$$ + 1).join("/");
            $nlinks$$--;
            continue a;
          } else {
            $current_link$$ = $current_link$$.parent;
          }
        } else {
          $current_path$$ = $PATH$normalize$$($current_path$$ + "/" + $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$17$$]);
          try {
            $current_link$$ = $FS$lookupNode$$($current_link$$, $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$17$$]);
          } catch ($e$jscomp$13$$) {
            if (44 === $e$jscomp$13$$?.$errno$ && $islast$$ && $opts$$.$noent_okay$) {
              return {path:$current_path$$};
            }
            throw $e$jscomp$13$$;
          }
          !$current_link$$.$mounted$ || $islast$$ && !$opts$$.$follow_mount$ || ($current_link$$ = $current_link$$.$mounted$.root);
          if (40960 === ($current_link$$.mode & 61440) && (!$islast$$ || $opts$$.$follow$)) {
            if (!$current_link$$.$node_ops$.readlink) {
              throw new $FS$ErrnoError$$(52);
            }
            $current_link$$ = $current_link$$.$node_ops$.readlink($current_link$$);
            "/" === $current_link$$.charAt(0) || ($current_link$$ = $PATH$dirname$$($current_path$$) + "/" + $current_link$$);
            $parts$jscomp$1_path$jscomp$45$$ = $current_link$$ + "/" + $parts$jscomp$1_path$jscomp$45$$.slice($i$jscomp$17$$ + 1).join("/");
            continue a;
          }
        }
      }
    }
    return {path:$current_path$$, node:$current_link$$};
  }
  throw new $FS$ErrnoError$$(32);
}
function $FS$getPath$$($mount$jscomp$1_node$jscomp$16$$) {
  for (var $path$jscomp$46$$;;) {
    if ($mount$jscomp$1_node$jscomp$16$$ === $mount$jscomp$1_node$jscomp$16$$.parent) {
      return $mount$jscomp$1_node$jscomp$16$$ = $mount$jscomp$1_node$jscomp$16$$.$mount$.$mountpoint$, $path$jscomp$46$$ ? "/" !== $mount$jscomp$1_node$jscomp$16$$[$mount$jscomp$1_node$jscomp$16$$.length - 1] ? `${$mount$jscomp$1_node$jscomp$16$$}/${$path$jscomp$46$$}` : $mount$jscomp$1_node$jscomp$16$$ + $path$jscomp$46$$ : $mount$jscomp$1_node$jscomp$16$$;
    }
    $path$jscomp$46$$ = $path$jscomp$46$$ ? `${$mount$jscomp$1_node$jscomp$16$$.name}/${$path$jscomp$46$$}` : $mount$jscomp$1_node$jscomp$16$$.name;
    $mount$jscomp$1_node$jscomp$16$$ = $mount$jscomp$1_node$jscomp$16$$.parent;
  }
}
function $FS$hashName$$($parentid$$, $name$jscomp$89$$) {
  for (var $hash$$ = 0, $i$jscomp$18$$ = 0; $i$jscomp$18$$ < $name$jscomp$89$$.length; $i$jscomp$18$$++) {
    $hash$$ = ($hash$$ << 5) - $hash$$ + $name$jscomp$89$$.charCodeAt($i$jscomp$18$$) | 0;
  }
  return ($parentid$$ + $hash$$ >>> 0) % $FS$nameTable$$.length;
}
function $FS$hashRemoveNode$$($node$jscomp$18$$) {
  var $current$jscomp$1_hash$jscomp$2$$ = $FS$hashName$$($node$jscomp$18$$.parent.id, $node$jscomp$18$$.name);
  if ($FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$] === $node$jscomp$18$$) {
    $FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$] = $node$jscomp$18$$.$name_next$;
  } else {
    for ($current$jscomp$1_hash$jscomp$2$$ = $FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$]; $current$jscomp$1_hash$jscomp$2$$;) {
      if ($current$jscomp$1_hash$jscomp$2$$.$name_next$ === $node$jscomp$18$$) {
        $current$jscomp$1_hash$jscomp$2$$.$name_next$ = $node$jscomp$18$$.$name_next$;
        break;
      }
      $current$jscomp$1_hash$jscomp$2$$ = $current$jscomp$1_hash$jscomp$2$$.$name_next$;
    }
  }
}
function $FS$lookupNode$$($parent$jscomp$13$$, $name$jscomp$90$$) {
  var $errCode_errCode$jscomp$inline_57_node$jscomp$19$$ = $FS$isDir$$($parent$jscomp$13$$.mode) ? ($errCode_errCode$jscomp$inline_57_node$jscomp$19$$ = $FS$nodePermissions$$($parent$jscomp$13$$, "x")) ? $errCode_errCode$jscomp$inline_57_node$jscomp$19$$ : $parent$jscomp$13$$.$node_ops$.lookup ? 0 : 2 : 54;
  if ($errCode_errCode$jscomp$inline_57_node$jscomp$19$$) {
    throw new $FS$ErrnoError$$($errCode_errCode$jscomp$inline_57_node$jscomp$19$$);
  }
  for ($errCode_errCode$jscomp$inline_57_node$jscomp$19$$ = $FS$nameTable$$[$FS$hashName$$($parent$jscomp$13$$.id, $name$jscomp$90$$)]; $errCode_errCode$jscomp$inline_57_node$jscomp$19$$; $errCode_errCode$jscomp$inline_57_node$jscomp$19$$ = $errCode_errCode$jscomp$inline_57_node$jscomp$19$$.$name_next$) {
    var $nodeName$$ = $errCode_errCode$jscomp$inline_57_node$jscomp$19$$.name;
    if ($errCode_errCode$jscomp$inline_57_node$jscomp$19$$.parent.id === $parent$jscomp$13$$.id && $nodeName$$ === $name$jscomp$90$$) {
      return $errCode_errCode$jscomp$inline_57_node$jscomp$19$$;
    }
  }
  return $parent$jscomp$13$$.$node_ops$.lookup($parent$jscomp$13$$, $name$jscomp$90$$);
}
function $FS$createNode$$($node$jscomp$20_parent$jscomp$14$$, $hash$jscomp$inline_60_name$jscomp$91$$, $mode$jscomp$32$$, $rdev$jscomp$1$$) {
  $node$jscomp$20_parent$jscomp$14$$ = new $FS$FSNode$$($node$jscomp$20_parent$jscomp$14$$, $hash$jscomp$inline_60_name$jscomp$91$$, $mode$jscomp$32$$, $rdev$jscomp$1$$);
  $hash$jscomp$inline_60_name$jscomp$91$$ = $FS$hashName$$($node$jscomp$20_parent$jscomp$14$$.parent.id, $node$jscomp$20_parent$jscomp$14$$.name);
  $node$jscomp$20_parent$jscomp$14$$.$name_next$ = $FS$nameTable$$[$hash$jscomp$inline_60_name$jscomp$91$$];
  return $FS$nameTable$$[$hash$jscomp$inline_60_name$jscomp$91$$] = $node$jscomp$20_parent$jscomp$14$$;
}
function $FS$isDir$$($mode$jscomp$34$$) {
  return 16384 === ($mode$jscomp$34$$ & 61440);
}
function $FS$flagsToPermissionString$$($flag$jscomp$3$$) {
  var $perms$$ = ["r", "w", "rw"][$flag$jscomp$3$$ & 3];
  $flag$jscomp$3$$ & 512 && ($perms$$ += "w");
  return $perms$$;
}
function $FS$nodePermissions$$($node$jscomp$24$$, $perms$jscomp$1$$) {
  if ($FS$ignorePermissions$$) {
    return 0;
  }
  if (!$perms$jscomp$1$$.includes("r") || $node$jscomp$24$$.mode & 292) {
    if ($perms$jscomp$1$$.includes("w") && !($node$jscomp$24$$.mode & 146) || $perms$jscomp$1$$.includes("x") && !($node$jscomp$24$$.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function $FS$mayCreate$$($dir$jscomp$2$$, $name$jscomp$92$$) {
  if (!$FS$isDir$$($dir$jscomp$2$$.mode)) {
    return 54;
  }
  try {
    return $FS$lookupNode$$($dir$jscomp$2$$, $name$jscomp$92$$), 20;
  } catch ($e$jscomp$14$$) {
  }
  return $FS$nodePermissions$$($dir$jscomp$2$$, "wx");
}
function $FS$getStreamChecked$$($fd$jscomp$22_stream$jscomp$16$$) {
  $fd$jscomp$22_stream$jscomp$16$$ = $FS$streams$$[$fd$jscomp$22_stream$jscomp$16$$];
  if (!$fd$jscomp$22_stream$jscomp$16$$) {
    throw new $FS$ErrnoError$$(8);
  }
  return $fd$jscomp$22_stream$jscomp$16$$;
}
function $FS$createStream$$($stream$jscomp$17$$, $fd$jscomp$24_fd$jscomp$inline_62$$ = -1) {
  $stream$jscomp$17$$ = Object.assign(new $FS$FSStream$$(), $stream$jscomp$17$$);
  if (-1 == $fd$jscomp$24_fd$jscomp$inline_62$$) {
    a: {
      for ($fd$jscomp$24_fd$jscomp$inline_62$$ = 0; 4096 >= $fd$jscomp$24_fd$jscomp$inline_62$$; $fd$jscomp$24_fd$jscomp$inline_62$$++) {
        if (!$FS$streams$$[$fd$jscomp$24_fd$jscomp$inline_62$$]) {
          break a;
        }
      }
      throw new $FS$ErrnoError$$(33);
    }
  }
  $stream$jscomp$17$$.fd = $fd$jscomp$24_fd$jscomp$inline_62$$;
  return $FS$streams$$[$fd$jscomp$24_fd$jscomp$inline_62$$] = $stream$jscomp$17$$;
}
function $FS$dupStream$$($origStream_stream$jscomp$18$$, $fd$jscomp$26$$ = -1) {
  $origStream_stream$jscomp$18$$ = $FS$createStream$$($origStream_stream$jscomp$18$$, $fd$jscomp$26$$);
  $origStream_stream$jscomp$18$$.$stream_ops$?.$dup$?.($origStream_stream$jscomp$18$$);
  return $origStream_stream$jscomp$18$$;
}
function $FS$doSetAttr$$($arg$jscomp$8_stream$jscomp$19$$, $node$jscomp$28$$, $attr$jscomp$2$$) {
  var $setattr$$ = $arg$jscomp$8_stream$jscomp$19$$?.$stream_ops$.$setattr$;
  $arg$jscomp$8_stream$jscomp$19$$ = $setattr$$ ? $arg$jscomp$8_stream$jscomp$19$$ : $node$jscomp$28$$;
  $setattr$$ ??= $node$jscomp$28$$.$node_ops$.$setattr$;
  if (!$setattr$$) {
    throw new $FS$ErrnoError$$(63);
  }
  $setattr$$($arg$jscomp$8_stream$jscomp$19$$, $attr$jscomp$2$$);
}
var $FS$chrdev_stream_ops$$ = {open($stream$jscomp$20$$) {
  $stream$jscomp$20$$.$stream_ops$ = $FS$devices$$[$stream$jscomp$20$$.node.rdev].$stream_ops$;
  $stream$jscomp$20$$.$stream_ops$.open?.($stream$jscomp$20$$);
}, $llseek$() {
  throw new $FS$ErrnoError$$(70);
}};
function $FS$registerDevice$$($dev$jscomp$5$$, $ops$jscomp$1$$) {
  $FS$devices$$[$dev$jscomp$5$$] = {$stream_ops$:$ops$jscomp$1$$};
}
function $FS$mount$$($mountRoot_type$jscomp$175$$, $mount$jscomp$4_mountpoint$$) {
  var $root$jscomp$4$$ = "/" === $mount$jscomp$4_mountpoint$$;
  if ($root$jscomp$4$$ && $FS$root$$) {
    throw new $FS$ErrnoError$$(10);
  }
  if (!$root$jscomp$4$$ && $mount$jscomp$4_mountpoint$$) {
    var $lookup_node$jscomp$29$$ = $FS$lookupPath$$($mount$jscomp$4_mountpoint$$, {$follow_mount$:!1});
    $mount$jscomp$4_mountpoint$$ = $lookup_node$jscomp$29$$.path;
    $lookup_node$jscomp$29$$ = $lookup_node$jscomp$29$$.node;
    if ($lookup_node$jscomp$29$$.$mounted$) {
      throw new $FS$ErrnoError$$(10);
    }
    if (!$FS$isDir$$($lookup_node$jscomp$29$$.mode)) {
      throw new $FS$ErrnoError$$(54);
    }
  }
  $mount$jscomp$4_mountpoint$$ = {type:$mountRoot_type$jscomp$175$$, $opts$:{}, $mountpoint$:$mount$jscomp$4_mountpoint$$, $mounts$:[]};
  $mountRoot_type$jscomp$175$$ = $mountRoot_type$jscomp$175$$.$mount$($mount$jscomp$4_mountpoint$$);
  $mountRoot_type$jscomp$175$$.$mount$ = $mount$jscomp$4_mountpoint$$;
  $mount$jscomp$4_mountpoint$$.root = $mountRoot_type$jscomp$175$$;
  $root$jscomp$4$$ ? $FS$root$$ = $mountRoot_type$jscomp$175$$ : $lookup_node$jscomp$29$$ && ($lookup_node$jscomp$29$$.$mounted$ = $mount$jscomp$4_mountpoint$$, $lookup_node$jscomp$29$$.$mount$ && $lookup_node$jscomp$29$$.$mount$.$mounts$.push($mount$jscomp$4_mountpoint$$));
}
function $FS$mknod$$($name$jscomp$95_path$jscomp$47$$, $mode$jscomp$40$$, $dev$jscomp$7$$) {
  var $parent$jscomp$16$$ = $FS$lookupPath$$($name$jscomp$95_path$jscomp$47$$, {parent:!0}).node;
  $name$jscomp$95_path$jscomp$47$$ = $name$jscomp$95_path$jscomp$47$$ && $name$jscomp$95_path$jscomp$47$$.match(/([^\/]+|\/)\/*$/)[1];
  if (!$name$jscomp$95_path$jscomp$47$$) {
    throw new $FS$ErrnoError$$(28);
  }
  if ("." === $name$jscomp$95_path$jscomp$47$$ || ".." === $name$jscomp$95_path$jscomp$47$$) {
    throw new $FS$ErrnoError$$(20);
  }
  var $errCode$jscomp$5$$ = $FS$mayCreate$$($parent$jscomp$16$$, $name$jscomp$95_path$jscomp$47$$);
  if ($errCode$jscomp$5$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$5$$);
  }
  if (!$parent$jscomp$16$$.$node_ops$.$mknod$) {
    throw new $FS$ErrnoError$$(63);
  }
  return $parent$jscomp$16$$.$node_ops$.$mknod$($parent$jscomp$16$$, $name$jscomp$95_path$jscomp$47$$, $mode$jscomp$40$$, $dev$jscomp$7$$);
}
function $FS$create$$($path$jscomp$49$$, $mode$jscomp$41$$ = 438) {
  return $FS$mknod$$($path$jscomp$49$$, $mode$jscomp$41$$ & 4095 | 32768, 0);
}
function $FS$mkdir$$($path$jscomp$50$$) {
  return $FS$mknod$$($path$jscomp$50$$, 16895, 0);
}
function $FS$mkdev$$($path$jscomp$52$$, $mode$jscomp$44$$, $dev$jscomp$8$$) {
  "undefined" == typeof $dev$jscomp$8$$ && ($dev$jscomp$8$$ = $mode$jscomp$44$$, $mode$jscomp$44$$ = 438);
  return $FS$mknod$$($path$jscomp$52$$, $mode$jscomp$44$$ | 8192, $dev$jscomp$8$$);
}
function $FS$symlink$$($oldpath$jscomp$1$$, $newname$jscomp$1_newpath$$) {
  if (!$PATH_FS$resolve$$($oldpath$jscomp$1$$)) {
    throw new $FS$ErrnoError$$(44);
  }
  var $parent$jscomp$17$$ = $FS$lookupPath$$($newname$jscomp$1_newpath$$, {parent:!0}).node;
  if (!$parent$jscomp$17$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $newname$jscomp$1_newpath$$ = $newname$jscomp$1_newpath$$ && $newname$jscomp$1_newpath$$.match(/([^\/]+|\/)\/*$/)[1];
  var $errCode$jscomp$6$$ = $FS$mayCreate$$($parent$jscomp$17$$, $newname$jscomp$1_newpath$$);
  if ($errCode$jscomp$6$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$6$$);
  }
  if (!$parent$jscomp$17$$.$node_ops$.symlink) {
    throw new $FS$ErrnoError$$(63);
  }
  $parent$jscomp$17$$.$node_ops$.symlink($parent$jscomp$17$$, $newname$jscomp$1_newpath$$, $oldpath$jscomp$1$$);
}
function $FS$unlink$$($name$jscomp$97_path$jscomp$55$$) {
  var $parent$jscomp$19$$ = $FS$lookupPath$$($name$jscomp$97_path$jscomp$55$$, {parent:!0}).node;
  if (!$parent$jscomp$19$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $name$jscomp$97_path$jscomp$55$$ = $name$jscomp$97_path$jscomp$55$$ && $name$jscomp$97_path$jscomp$55$$.match(/([^\/]+|\/)\/*$/)[1];
  var $node$jscomp$34$$ = $FS$lookupNode$$($parent$jscomp$19$$, $name$jscomp$97_path$jscomp$55$$);
  a: {
    try {
      var $errCode$jscomp$9_node$jscomp$inline_328$$ = $FS$lookupNode$$($parent$jscomp$19$$, $name$jscomp$97_path$jscomp$55$$);
    } catch ($e$jscomp$inline_330$$) {
      $errCode$jscomp$9_node$jscomp$inline_328$$ = $e$jscomp$inline_330$$.$errno$;
      break a;
    }
    var $errCode$jscomp$inline_329$$ = $FS$nodePermissions$$($parent$jscomp$19$$, "wx");
    $errCode$jscomp$9_node$jscomp$inline_328$$ = $errCode$jscomp$inline_329$$ ? $errCode$jscomp$inline_329$$ : $FS$isDir$$($errCode$jscomp$9_node$jscomp$inline_328$$.mode) ? 31 : 0;
  }
  if ($errCode$jscomp$9_node$jscomp$inline_328$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$9_node$jscomp$inline_328$$);
  }
  if (!$parent$jscomp$19$$.$node_ops$.unlink) {
    throw new $FS$ErrnoError$$(63);
  }
  if ($node$jscomp$34$$.$mounted$) {
    throw new $FS$ErrnoError$$(10);
  }
  $parent$jscomp$19$$.$node_ops$.unlink($parent$jscomp$19$$, $name$jscomp$97_path$jscomp$55$$);
  $FS$hashRemoveNode$$($node$jscomp$34$$);
}
function $FS$chmod$$($node$jscomp$38_path$jscomp$59$$, $mode$jscomp$46$$) {
  $node$jscomp$38_path$jscomp$59$$ = "string" == typeof $node$jscomp$38_path$jscomp$59$$ ? $FS$lookupPath$$($node$jscomp$38_path$jscomp$59$$, {$follow$:!0}).node : $node$jscomp$38_path$jscomp$59$$;
  $FS$doSetAttr$$(null, $node$jscomp$38_path$jscomp$59$$, {mode:$mode$jscomp$46$$ & 4095 | $node$jscomp$38_path$jscomp$59$$.mode & -4096, ctime:Date.now(), $dontFollow$:void 0});
}
function $FS$doTruncate$$($stream$jscomp$27$$, $node$jscomp$41$$, $len$jscomp$5$$) {
  if ($FS$isDir$$($node$jscomp$41$$.mode)) {
    throw new $FS$ErrnoError$$(31);
  }
  if (32768 !== ($node$jscomp$41$$.mode & 61440)) {
    throw new $FS$ErrnoError$$(28);
  }
  var $errCode$jscomp$10$$ = $FS$nodePermissions$$($node$jscomp$41$$, "w");
  if ($errCode$jscomp$10$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$10$$);
  }
  $FS$doSetAttr$$($stream$jscomp$27$$, $node$jscomp$41$$, {size:$len$jscomp$5$$, timestamp:Date.now()});
}
function $FS$open$$($lookup$jscomp$14_path$jscomp$65$$, $JSCompiler_temp$jscomp$5_flags$jscomp$12$$, $mode$jscomp$49$$ = 438) {
  if ("" === $lookup$jscomp$14_path$jscomp$65$$) {
    throw new $FS$ErrnoError$$(44);
  }
  if ("string" == typeof $JSCompiler_temp$jscomp$5_flags$jscomp$12$$) {
    var $flags$jscomp$inline_75_node$jscomp$44$$ = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090}[$JSCompiler_temp$jscomp$5_flags$jscomp$12$$];
    if ("undefined" == typeof $flags$jscomp$inline_75_node$jscomp$44$$) {
      throw Error(`Unknown file open mode: ${$JSCompiler_temp$jscomp$5_flags$jscomp$12$$}`);
    }
    $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ = $flags$jscomp$inline_75_node$jscomp$44$$;
  }
  $mode$jscomp$49$$ = $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 64 ? $mode$jscomp$49$$ & 4095 | 32768 : 0;
  if ("object" == typeof $lookup$jscomp$14_path$jscomp$65$$) {
    $flags$jscomp$inline_75_node$jscomp$44$$ = $lookup$jscomp$14_path$jscomp$65$$;
  } else {
    var $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ = $lookup$jscomp$14_path$jscomp$65$$.endsWith("/");
    $lookup$jscomp$14_path$jscomp$65$$ = $FS$lookupPath$$($lookup$jscomp$14_path$jscomp$65$$, {$follow$:!($JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 131072), $noent_okay$:!0});
    $flags$jscomp$inline_75_node$jscomp$44$$ = $lookup$jscomp$14_path$jscomp$65$$.node;
    $lookup$jscomp$14_path$jscomp$65$$ = $lookup$jscomp$14_path$jscomp$65$$.path;
  }
  var $created$$ = !1;
  if ($JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 64) {
    if ($flags$jscomp$inline_75_node$jscomp$44$$) {
      if ($JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 128) {
        throw new $FS$ErrnoError$$(20);
      }
    } else {
      if ($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$) {
        throw new $FS$ErrnoError$$(31);
      }
      $flags$jscomp$inline_75_node$jscomp$44$$ = $FS$mknod$$($lookup$jscomp$14_path$jscomp$65$$, $mode$jscomp$49$$ | 511, 0);
      $created$$ = !0;
    }
  }
  if (!$flags$jscomp$inline_75_node$jscomp$44$$) {
    throw new $FS$ErrnoError$$(44);
  }
  8192 === ($flags$jscomp$inline_75_node$jscomp$44$$.mode & 61440) && ($JSCompiler_temp$jscomp$5_flags$jscomp$12$$ &= -513);
  if ($JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 65536 && !$FS$isDir$$($flags$jscomp$inline_75_node$jscomp$44$$.mode)) {
    throw new $FS$ErrnoError$$(54);
  }
  if (!$created$$ && ($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ = $flags$jscomp$inline_75_node$jscomp$44$$ ? 40960 === ($flags$jscomp$inline_75_node$jscomp$44$$.mode & 61440) ? 32 : $FS$isDir$$($flags$jscomp$inline_75_node$jscomp$44$$.mode) && ("r" !== $FS$flagsToPermissionString$$($JSCompiler_temp$jscomp$5_flags$jscomp$12$$) || $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 576) ? 31 : $FS$nodePermissions$$($flags$jscomp$inline_75_node$jscomp$44$$, 
  $FS$flagsToPermissionString$$($JSCompiler_temp$jscomp$5_flags$jscomp$12$$)) : 44)) {
    throw new $FS$ErrnoError$$($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$);
  }
  $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 512 && !$created$$ && ($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ = $flags$jscomp$inline_75_node$jscomp$44$$, $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ = "string" == typeof $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ ? $FS$lookupPath$$($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$, 
  {$follow$:!0}).node : $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$, $FS$doTruncate$$(null, $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$, 0));
  $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ &= -131713;
  $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$ = $FS$createStream$$({node:$flags$jscomp$inline_75_node$jscomp$44$$, path:$FS$getPath$$($flags$jscomp$inline_75_node$jscomp$44$$), flags:$JSCompiler_temp$jscomp$5_flags$jscomp$12$$, seekable:!0, position:0, $stream_ops$:$flags$jscomp$inline_75_node$jscomp$44$$.$stream_ops$, $ungotten$:[], error:!1});
  $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$.$stream_ops$.open && $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$.$stream_ops$.open($errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$);
  $created$$ && $FS$chmod$$($flags$jscomp$inline_75_node$jscomp$44$$, $mode$jscomp$49$$ & 511);
  !$Module$$.logReadFiles || $JSCompiler_temp$jscomp$5_flags$jscomp$12$$ & 1 || $lookup$jscomp$14_path$jscomp$65$$ in $FS$readFiles$$ || ($FS$readFiles$$[$lookup$jscomp$14_path$jscomp$65$$] = 1);
  return $errCode$jscomp$11_isDirPath_node$jscomp$inline_79_path$jscomp$inline_77_stream$jscomp$29$$;
}
function $FS$close$$($stream$jscomp$30$$) {
  if (null === $stream$jscomp$30$$.fd) {
    throw new $FS$ErrnoError$$(8);
  }
  $stream$jscomp$30$$.$getdents$ && ($stream$jscomp$30$$.$getdents$ = null);
  try {
    $stream$jscomp$30$$.$stream_ops$.close && $stream$jscomp$30$$.$stream_ops$.close($stream$jscomp$30$$);
  } catch ($e$jscomp$19$$) {
    throw $e$jscomp$19$$;
  } finally {
    $FS$streams$$[$stream$jscomp$30$$.fd] = null;
  }
  $stream$jscomp$30$$.fd = null;
}
function $FS$llseek$$($stream$jscomp$32$$, $offset$jscomp$74$$, $whence$jscomp$1$$) {
  if (null === $stream$jscomp$32$$.fd) {
    throw new $FS$ErrnoError$$(8);
  }
  if (!$stream$jscomp$32$$.seekable || !$stream$jscomp$32$$.$stream_ops$.$llseek$) {
    throw new $FS$ErrnoError$$(70);
  }
  if (0 != $whence$jscomp$1$$ && 1 != $whence$jscomp$1$$ && 2 != $whence$jscomp$1$$) {
    throw new $FS$ErrnoError$$(28);
  }
  $stream$jscomp$32$$.position = $stream$jscomp$32$$.$stream_ops$.$llseek$($stream$jscomp$32$$, $offset$jscomp$74$$, $whence$jscomp$1$$);
  $stream$jscomp$32$$.$ungotten$ = [];
}
function $FS$write$$($stream$jscomp$34$$, $buffer$jscomp$33_bytesWritten$jscomp$1$$, $offset$jscomp$76$$, $length$jscomp$34$$, $position$jscomp$10$$, $canOwn$jscomp$3$$) {
  if (0 > $length$jscomp$34$$ || 0 > $position$jscomp$10$$) {
    throw new $FS$ErrnoError$$(28);
  }
  if (null === $stream$jscomp$34$$.fd) {
    throw new $FS$ErrnoError$$(8);
  }
  if (0 === ($stream$jscomp$34$$.flags & 2097155)) {
    throw new $FS$ErrnoError$$(8);
  }
  if ($FS$isDir$$($stream$jscomp$34$$.node.mode)) {
    throw new $FS$ErrnoError$$(31);
  }
  if (!$stream$jscomp$34$$.$stream_ops$.write) {
    throw new $FS$ErrnoError$$(28);
  }
  $stream$jscomp$34$$.seekable && $stream$jscomp$34$$.flags & 1024 && $FS$llseek$$($stream$jscomp$34$$, 0, 2);
  var $seeking$jscomp$1$$ = "undefined" != typeof $position$jscomp$10$$;
  if (!$seeking$jscomp$1$$) {
    $position$jscomp$10$$ = $stream$jscomp$34$$.position;
  } else if (!$stream$jscomp$34$$.seekable) {
    throw new $FS$ErrnoError$$(70);
  }
  $buffer$jscomp$33_bytesWritten$jscomp$1$$ = $stream$jscomp$34$$.$stream_ops$.write($stream$jscomp$34$$, $buffer$jscomp$33_bytesWritten$jscomp$1$$, $offset$jscomp$76$$, $length$jscomp$34$$, $position$jscomp$10$$, $canOwn$jscomp$3$$);
  $seeking$jscomp$1$$ || ($stream$jscomp$34$$.position += $buffer$jscomp$33_bytesWritten$jscomp$1$$);
  return $buffer$jscomp$33_bytesWritten$jscomp$1$$;
}
function $FS$createPath$$($parent$jscomp$21$$, $parts$jscomp$2_path$jscomp$71$$) {
  $parent$jscomp$21$$ = "string" == typeof $parent$jscomp$21$$ ? $parent$jscomp$21$$ : $FS$getPath$$($parent$jscomp$21$$);
  for ($parts$jscomp$2_path$jscomp$71$$ = $parts$jscomp$2_path$jscomp$71$$.split("/").reverse(); $parts$jscomp$2_path$jscomp$71$$.length;) {
    var $part$$ = $parts$jscomp$2_path$jscomp$71$$.pop();
    if ($part$$) {
      var $current$jscomp$3$$ = $PATH$normalize$$($parent$jscomp$21$$ + "/" + $part$$);
      try {
        $FS$mkdir$$($current$jscomp$3$$);
      } catch ($e$jscomp$22$$) {
        if (20 != $e$jscomp$22$$.$errno$) {
          throw $e$jscomp$22$$;
        }
      }
      $parent$jscomp$21$$ = $current$jscomp$3$$;
    }
  }
  return $current$jscomp$3$$;
}
function $FS$createFile$$($parent$jscomp$22_path$jscomp$72$$, $name$jscomp$99$$, $canRead$jscomp$4$$, $canWrite$jscomp$4$$) {
  $parent$jscomp$22_path$jscomp$72$$ = $PATH$normalize$$(("string" == typeof $parent$jscomp$22_path$jscomp$72$$ ? $parent$jscomp$22_path$jscomp$72$$ : $FS$getPath$$($parent$jscomp$22_path$jscomp$72$$)) + "/" + $name$jscomp$99$$);
  return $FS$create$$($parent$jscomp$22_path$jscomp$72$$, $FS_getMode$$($canRead$jscomp$4$$, $canWrite$jscomp$4$$));
}
function $FS$createDataFile$$($mode$jscomp$51_parent$jscomp$23$$, $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$, $data$jscomp$94$$, $canRead$jscomp$5_i$jscomp$19$$, $canWrite$jscomp$5_len$jscomp$8$$, $canOwn$jscomp$4$$) {
  var $node$jscomp$46_path$jscomp$73$$ = $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$;
  $mode$jscomp$51_parent$jscomp$23$$ && ($mode$jscomp$51_parent$jscomp$23$$ = "string" == typeof $mode$jscomp$51_parent$jscomp$23$$ ? $mode$jscomp$51_parent$jscomp$23$$ : $FS$getPath$$($mode$jscomp$51_parent$jscomp$23$$), $node$jscomp$46_path$jscomp$73$$ = $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$ ? $PATH$normalize$$($mode$jscomp$51_parent$jscomp$23$$ + "/" + $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$) : $mode$jscomp$51_parent$jscomp$23$$);
  $mode$jscomp$51_parent$jscomp$23$$ = $FS_getMode$$($canRead$jscomp$5_i$jscomp$19$$, $canWrite$jscomp$5_len$jscomp$8$$);
  $node$jscomp$46_path$jscomp$73$$ = $FS$create$$($node$jscomp$46_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$23$$);
  if ($data$jscomp$94$$) {
    if ("string" == typeof $data$jscomp$94$$) {
      $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$ = Array($data$jscomp$94$$.length);
      $canRead$jscomp$5_i$jscomp$19$$ = 0;
      for ($canWrite$jscomp$5_len$jscomp$8$$ = $data$jscomp$94$$.length; $canRead$jscomp$5_i$jscomp$19$$ < $canWrite$jscomp$5_len$jscomp$8$$; ++$canRead$jscomp$5_i$jscomp$19$$) {
        $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$[$canRead$jscomp$5_i$jscomp$19$$] = $data$jscomp$94$$.charCodeAt($canRead$jscomp$5_i$jscomp$19$$);
      }
      $data$jscomp$94$$ = $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$;
    }
    $FS$chmod$$($node$jscomp$46_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$23$$ | 146);
    $arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$ = $FS$open$$($node$jscomp$46_path$jscomp$73$$, 577);
    $FS$write$$($arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$, $data$jscomp$94$$, 0, $data$jscomp$94$$.length, 0, $canOwn$jscomp$4$$);
    $FS$close$$($arr$jscomp$2_name$jscomp$100_stream$jscomp$43$$);
    $FS$chmod$$($node$jscomp$46_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$23$$);
  }
}
function $FS$createDevice$$($parent$jscomp$24_path$jscomp$74$$, $mode$jscomp$52_name$jscomp$101$$, $input$jscomp$14$$, $output$jscomp$4$$) {
  $parent$jscomp$24_path$jscomp$74$$ = $PATH$normalize$$(("string" == typeof $parent$jscomp$24_path$jscomp$74$$ ? $parent$jscomp$24_path$jscomp$74$$ : $FS$getPath$$($parent$jscomp$24_path$jscomp$74$$)) + "/" + $mode$jscomp$52_name$jscomp$101$$);
  $mode$jscomp$52_name$jscomp$101$$ = $FS_getMode$$(!!$input$jscomp$14$$, !!$output$jscomp$4$$);
  $FS$createDevice$$.$major$ ?? ($FS$createDevice$$.$major$ = 64);
  var $dev$jscomp$9$$ = $FS$createDevice$$.$major$++ << 8 | 0;
  $FS$registerDevice$$($dev$jscomp$9$$, {open($stream$jscomp$44$$) {
    $stream$jscomp$44$$.seekable = !1;
  }, close() {
    $output$jscomp$4$$?.buffer?.length && $output$jscomp$4$$(10);
  }, read($stream$jscomp$46$$, $buffer$jscomp$36$$, $offset$jscomp$79$$, $length$jscomp$39$$) {
    for (var $bytesRead$jscomp$3$$ = 0, $i$jscomp$20$$ = 0; $i$jscomp$20$$ < $length$jscomp$39$$; $i$jscomp$20$$++) {
      try {
        var $result$jscomp$6$$ = $input$jscomp$14$$();
      } catch ($e$jscomp$23$$) {
        throw new $FS$ErrnoError$$(29);
      }
      if (void 0 === $result$jscomp$6$$ && 0 === $bytesRead$jscomp$3$$) {
        throw new $FS$ErrnoError$$(6);
      }
      if (null === $result$jscomp$6$$ || void 0 === $result$jscomp$6$$) {
        break;
      }
      $bytesRead$jscomp$3$$++;
      $buffer$jscomp$36$$[$offset$jscomp$79$$ + $i$jscomp$20$$] = $result$jscomp$6$$;
    }
    $bytesRead$jscomp$3$$ && ($stream$jscomp$46$$.node.atime = Date.now());
    return $bytesRead$jscomp$3$$;
  }, write($stream$jscomp$47$$, $buffer$jscomp$37$$, $offset$jscomp$80$$, $length$jscomp$40$$) {
    for (var $i$jscomp$21$$ = 0; $i$jscomp$21$$ < $length$jscomp$40$$; $i$jscomp$21$$++) {
      try {
        $output$jscomp$4$$($buffer$jscomp$37$$[$offset$jscomp$80$$ + $i$jscomp$21$$]);
      } catch ($e$jscomp$24$$) {
        throw new $FS$ErrnoError$$(29);
      }
    }
    $length$jscomp$40$$ && ($stream$jscomp$47$$.node.mtime = $stream$jscomp$47$$.node.ctime = Date.now());
    return $i$jscomp$21$$;
  }});
  return $FS$mkdev$$($parent$jscomp$24_path$jscomp$74$$, $mode$jscomp$52_name$jscomp$101$$, $dev$jscomp$9$$);
}
function $FS$forceLoadFile$$($obj$jscomp$33$$) {
  if (!($obj$jscomp$33$$.$isDevice$ || $obj$jscomp$33$$.$isFolder$ || $obj$jscomp$33$$.link || $obj$jscomp$33$$.$contents$)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    try {
      $obj$jscomp$33$$.$contents$ = $readBinary$$($obj$jscomp$33$$.url), $obj$jscomp$33$$.$usedBytes$ = $obj$jscomp$33$$.$contents$.length;
    } catch ($e$jscomp$25$$) {
      throw new $FS$ErrnoError$$(29);
    }
  }
}
function $FS$createLazyFile$$($parent$jscomp$25$$, $name$jscomp$102$$, $url$jscomp$31$$, $canRead$jscomp$6$$, $canWrite$jscomp$6$$) {
  class $LazyUint8Array$$ {
    $i$=!1;
    $g$=[];
    $h$=void 0;
    $l$=0;
    $j$=0;
    get($idx$jscomp$3$$) {
      if (!($idx$jscomp$3$$ > this.length - 1 || 0 > $idx$jscomp$3$$)) {
        var $chunkOffset$$ = $idx$jscomp$3$$ % this.chunkSize;
        return this.$h$($idx$jscomp$3$$ / this.chunkSize | 0)[$chunkOffset$$];
      }
    }
    $o$($getter$$) {
      this.$h$ = $getter$$;
    }
    $m$() {
      var $usesGzip_xhr$jscomp$2$$ = new XMLHttpRequest();
      $usesGzip_xhr$jscomp$2$$.open("HEAD", $url$jscomp$31$$, !1);
      $usesGzip_xhr$jscomp$2$$.send(null);
      if (!(200 <= $usesGzip_xhr$jscomp$2$$.status && 300 > $usesGzip_xhr$jscomp$2$$.status || 304 === $usesGzip_xhr$jscomp$2$$.status)) {
        throw Error("Couldn't load " + $url$jscomp$31$$ + ". Status: " + $usesGzip_xhr$jscomp$2$$.status);
      }
      var $datalength$$ = Number($usesGzip_xhr$jscomp$2$$.getResponseHeader("Content-length")), $header$jscomp$2$$, $hasByteServing$$ = ($header$jscomp$2$$ = $usesGzip_xhr$jscomp$2$$.getResponseHeader("Accept-Ranges")) && "bytes" === $header$jscomp$2$$;
      $usesGzip_xhr$jscomp$2$$ = ($header$jscomp$2$$ = $usesGzip_xhr$jscomp$2$$.getResponseHeader("Content-Encoding")) && "gzip" === $header$jscomp$2$$;
      var $chunkSize$$ = 1048576;
      $hasByteServing$$ || ($chunkSize$$ = $datalength$$);
      var $lazyArray$jscomp$1$$ = this;
      $lazyArray$jscomp$1$$.$o$($chunkNum$jscomp$1$$ => {
        var $JSCompiler_inline_result$jscomp$11_start$jscomp$23$$ = $chunkNum$jscomp$1$$ * $chunkSize$$, $end$jscomp$23_to$jscomp$inline_88$$ = ($chunkNum$jscomp$1$$ + 1) * $chunkSize$$ - 1;
        $end$jscomp$23_to$jscomp$inline_88$$ = Math.min($end$jscomp$23_to$jscomp$inline_88$$, $datalength$$ - 1);
        if ("undefined" == typeof $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$]) {
          var $JSCompiler_temp_const$jscomp$10$$ = $lazyArray$jscomp$1$$.$g$;
          if ($JSCompiler_inline_result$jscomp$11_start$jscomp$23$$ > $end$jscomp$23_to$jscomp$inline_88$$) {
            throw Error("invalid range (" + $JSCompiler_inline_result$jscomp$11_start$jscomp$23$$ + ", " + $end$jscomp$23_to$jscomp$inline_88$$ + ") or no bytes requested!");
          }
          if ($end$jscomp$23_to$jscomp$inline_88$$ > $datalength$$ - 1) {
            throw Error("only " + $datalength$$ + " bytes available! programmer error!");
          }
          var $xhr$jscomp$inline_89$$ = new XMLHttpRequest();
          $xhr$jscomp$inline_89$$.open("GET", $url$jscomp$31$$, !1);
          $datalength$$ !== $chunkSize$$ && $xhr$jscomp$inline_89$$.setRequestHeader("Range", "bytes=" + $JSCompiler_inline_result$jscomp$11_start$jscomp$23$$ + "-" + $end$jscomp$23_to$jscomp$inline_88$$);
          $xhr$jscomp$inline_89$$.responseType = "arraybuffer";
          $xhr$jscomp$inline_89$$.overrideMimeType && $xhr$jscomp$inline_89$$.overrideMimeType("text/plain; charset=x-user-defined");
          $xhr$jscomp$inline_89$$.send(null);
          if (!(200 <= $xhr$jscomp$inline_89$$.status && 300 > $xhr$jscomp$inline_89$$.status || 304 === $xhr$jscomp$inline_89$$.status)) {
            throw Error("Couldn't load " + $url$jscomp$31$$ + ". Status: " + $xhr$jscomp$inline_89$$.status);
          }
          $JSCompiler_inline_result$jscomp$11_start$jscomp$23$$ = void 0 !== $xhr$jscomp$inline_89$$.response ? new Uint8Array($xhr$jscomp$inline_89$$.response || []) : $intArrayFromString$$($xhr$jscomp$inline_89$$.responseText || "");
          $JSCompiler_temp_const$jscomp$10$$[$chunkNum$jscomp$1$$] = $JSCompiler_inline_result$jscomp$11_start$jscomp$23$$;
        }
        if ("undefined" == typeof $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$]) {
          throw Error("doXHR failed!");
        }
        return $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$];
      });
      if ($usesGzip_xhr$jscomp$2$$ || !$datalength$$) {
        $chunkSize$$ = $datalength$$ = 1, $chunkSize$$ = $datalength$$ = this.$h$(0).length, $out$$("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.$l$ = $datalength$$;
      this.$j$ = $chunkSize$$;
      this.$i$ = !0;
    }
    get length() {
      this.$i$ || this.$m$();
      return this.$l$;
    }
    get chunkSize() {
      this.$i$ || this.$m$();
      return this.$j$;
    }
  }
  if ("undefined" != typeof XMLHttpRequest) {
    if (!$ENVIRONMENT_IS_WORKER$$) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var $JSCompiler_object_inline_contents_315$$ = new $LazyUint8Array$$();
    var $JSCompiler_object_inline_url_316$$ = void 0;
  } else {
    $JSCompiler_object_inline_url_316$$ = $url$jscomp$31$$, $JSCompiler_object_inline_contents_315$$ = void 0;
  }
  var $node$jscomp$47$$ = $FS$createFile$$($parent$jscomp$25$$, $name$jscomp$102$$, $canRead$jscomp$6$$, $canWrite$jscomp$6$$);
  $JSCompiler_object_inline_contents_315$$ ? $node$jscomp$47$$.$contents$ = $JSCompiler_object_inline_contents_315$$ : $JSCompiler_object_inline_url_316$$ && ($node$jscomp$47$$.$contents$ = null, $node$jscomp$47$$.url = $JSCompiler_object_inline_url_316$$);
  Object.defineProperties($node$jscomp$47$$, {$usedBytes$:{get:function() {
    return this.$contents$.length;
  }}});
  var $stream_ops$$ = {};
  Object.keys($node$jscomp$47$$.$stream_ops$).forEach($key$jscomp$41$$ => {
    var $fn$jscomp$1$$ = $node$jscomp$47$$.$stream_ops$[$key$jscomp$41$$];
    $stream_ops$$[$key$jscomp$41$$] = (...$args$jscomp$8$$) => {
      $FS$forceLoadFile$$($node$jscomp$47$$);
      return $fn$jscomp$1$$(...$args$jscomp$8$$);
    };
  });
  $stream_ops$$.read = ($contents$jscomp$inline_337_stream$jscomp$49$$, $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$, $offset$jscomp$82$$, $length$jscomp$42_size$jscomp$inline_338$$, $position$jscomp$13$$) => {
    $FS$forceLoadFile$$($node$jscomp$47$$);
    $contents$jscomp$inline_337_stream$jscomp$49$$ = $contents$jscomp$inline_337_stream$jscomp$49$$.node.$contents$;
    if ($position$jscomp$13$$ >= $contents$jscomp$inline_337_stream$jscomp$49$$.length) {
      $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$ = 0;
    } else {
      $length$jscomp$42_size$jscomp$inline_338$$ = Math.min($contents$jscomp$inline_337_stream$jscomp$49$$.length - $position$jscomp$13$$, $length$jscomp$42_size$jscomp$inline_338$$);
      if ($contents$jscomp$inline_337_stream$jscomp$49$$.slice) {
        for (var $i$jscomp$inline_339$$ = 0; $i$jscomp$inline_339$$ < $length$jscomp$42_size$jscomp$inline_338$$; $i$jscomp$inline_339$$++) {
          $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$[$offset$jscomp$82$$ + $i$jscomp$inline_339$$] = $contents$jscomp$inline_337_stream$jscomp$49$$[$position$jscomp$13$$ + $i$jscomp$inline_339$$];
        }
      } else {
        for ($i$jscomp$inline_339$$ = 0; $i$jscomp$inline_339$$ < $length$jscomp$42_size$jscomp$inline_338$$; $i$jscomp$inline_339$$++) {
          $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$[$offset$jscomp$82$$ + $i$jscomp$inline_339$$] = $contents$jscomp$inline_337_stream$jscomp$49$$.get($position$jscomp$13$$ + $i$jscomp$inline_339$$);
        }
      }
      $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$ = $length$jscomp$42_size$jscomp$inline_338$$;
    }
    return $JSCompiler_inline_result$jscomp$324_buffer$jscomp$39$$;
  };
  $stream_ops$$.$mmap$ = () => {
    $FS$forceLoadFile$$($node$jscomp$47$$);
    $abort$$();
    throw new $FS$ErrnoError$$(48);
  };
  $node$jscomp$47$$.$stream_ops$ = $stream_ops$$;
  return $node$jscomp$47$$;
}
var $FS$$ = {}, $SYSCALLS$varargs$$ = void 0, $syscallGetVarargI$$ = () => {
  var $ret$jscomp$6$$ = $HEAP32$$[+$SYSCALLS$varargs$$ >> 2];
  $SYSCALLS$varargs$$ += 4;
  return $ret$jscomp$6$$;
}, $AsciiToString$$ = $ptr$jscomp$7$$ => {
  for (var $str$jscomp$12$$ = "";;) {
    var $ch$$ = $HEAPU8$$[$ptr$jscomp$7$$++];
    if (!$ch$$) {
      return $str$jscomp$12$$;
    }
    $str$jscomp$12$$ += String.fromCharCode($ch$$);
  }
}, $awaitingDependencies$$ = {}, $registeredTypes$$ = {}, $typeDependencies$$ = {}, $BindingError$$ = class extends Error {
  constructor($message$jscomp$42$$) {
    super($message$jscomp$42$$);
    this.name = "BindingError";
  }
};
function $sharedRegisterType$$($rawType$$, $callbacks$jscomp$1_registeredInstance$$, $options$jscomp$107$$ = {}) {
  var $name$jscomp$103$$ = $callbacks$jscomp$1_registeredInstance$$.name;
  if (!$rawType$$) {
    throw new $BindingError$$(`type "${$name$jscomp$103$$}" must have a positive integer typeid pointer`);
  }
  if ($registeredTypes$$.hasOwnProperty($rawType$$)) {
    if ($options$jscomp$107$$.$ignoreDuplicateRegistrations$) {
      return;
    }
    throw new $BindingError$$(`Cannot register type '${$name$jscomp$103$$}' twice`);
  }
  $registeredTypes$$[$rawType$$] = $callbacks$jscomp$1_registeredInstance$$;
  delete $typeDependencies$$[$rawType$$];
  $awaitingDependencies$$.hasOwnProperty($rawType$$) && ($callbacks$jscomp$1_registeredInstance$$ = $awaitingDependencies$$[$rawType$$], delete $awaitingDependencies$$[$rawType$$], $callbacks$jscomp$1_registeredInstance$$.forEach($cb$jscomp$8$$ => $cb$jscomp$8$$()));
}
function $registerType$$($rawType$jscomp$1$$, $registeredInstance$jscomp$1$$, $options$jscomp$108$$ = {}) {
  return $sharedRegisterType$$($rawType$jscomp$1$$, $registeredInstance$jscomp$1$$, $options$jscomp$108$$);
}
var $integerReadValueFromPointer$$ = ($name$jscomp$104$$, $width$jscomp$28$$, $signed$$) => {
  switch($width$jscomp$28$$) {
    case 1:
      return $signed$$ ? $pointer$$ => $HEAP8$$[$pointer$$] : $pointer$jscomp$1$$ => $HEAPU8$$[$pointer$jscomp$1$$];
    case 2:
      return $signed$$ ? $pointer$jscomp$2$$ => $HEAP16$$[$pointer$jscomp$2$$ >> 1] : $pointer$jscomp$3$$ => $HEAPU16$$[$pointer$jscomp$3$$ >> 1];
    case 4:
      return $signed$$ ? $pointer$jscomp$4$$ => $HEAP32$$[$pointer$jscomp$4$$ >> 2] : $pointer$jscomp$5$$ => $HEAPU32$$[$pointer$jscomp$5$$ >> 2];
    case 8:
      return $signed$$ ? $pointer$jscomp$6$$ => $HEAP64$$[$pointer$jscomp$6$$ >> 3] : $pointer$jscomp$7$$ => $HEAPU64$$[$pointer$jscomp$7$$ >> 3];
    default:
      throw new TypeError(`invalid integer width (${$width$jscomp$28$$}): ${$name$jscomp$104$$}`);
  }
}, $emval_freelist$$ = [], $emval_handles$$ = [0, 1, , 1, null, 1, !0, 1, !1, 1], $Emval$toHandle$$ = $value$jscomp$115$$ => {
  switch($value$jscomp$115$$) {
    case void 0:
      return 2;
    case null:
      return 4;
    case !0:
      return 6;
    case !1:
      return 8;
    default:
      const $handle$jscomp$14$$ = $emval_freelist$$.pop() || $emval_handles$$.length;
      $emval_handles$$[$handle$jscomp$14$$] = $value$jscomp$115$$;
      $emval_handles$$[$handle$jscomp$14$$ + 1] = 1;
      return $handle$jscomp$14$$;
  }
};
function $readPointer$$($pointer$jscomp$9$$) {
  return this.$fromWireType$($HEAPU32$$[$pointer$jscomp$9$$ >> 2]);
}
var $EmValType$$ = {name:"emscripten::val", $fromWireType$:$handle$jscomp$15$$ => {
  if (!$handle$jscomp$15$$) {
    throw new $BindingError$$(`Cannot use deleted val. handle = ${$handle$jscomp$15$$}`);
  }
  var $rv$$ = $emval_handles$$[$handle$jscomp$15$$];
  9 < $handle$jscomp$15$$ && 0 === --$emval_handles$$[$handle$jscomp$15$$ + 1] && ($emval_handles$$[$handle$jscomp$15$$] = void 0, $emval_freelist$$.push($handle$jscomp$15$$));
  return $rv$$;
}, $toWireType$:($destructors$jscomp$2$$, $value$jscomp$116$$) => $Emval$toHandle$$($value$jscomp$116$$), $readValueFromPointer$:$readPointer$$, $destructorFunction$:null}, $floatReadValueFromPointer$$ = ($name$jscomp$107$$, $width$jscomp$29$$) => {
  switch($width$jscomp$29$$) {
    case 4:
      return function($pointer$jscomp$10$$) {
        return this.$fromWireType$($HEAPF32$$[$pointer$jscomp$10$$ >> 2]);
      };
    case 8:
      return function($pointer$jscomp$11$$) {
        return this.$fromWireType$($HEAPF64$$[$pointer$jscomp$11$$ >> 3]);
      };
    default:
      throw new TypeError(`invalid float width (${$width$jscomp$29$$}): ${$name$jscomp$107$$}`);
  }
}, $UTF16Decoder$$ = new TextDecoder("utf-16le"), $UTF16ToString$$ = ($idx$jscomp$4_ptr$jscomp$10$$, $maxBytesToRead$jscomp$3$$, $ignoreNul$jscomp$3$$) => {
  $idx$jscomp$4_ptr$jscomp$10$$ >>= 1;
  return $UTF16Decoder$$.decode($HEAPU16$$.subarray($idx$jscomp$4_ptr$jscomp$10$$, $findStringEnd$$($HEAPU16$$, $idx$jscomp$4_ptr$jscomp$10$$, $maxBytesToRead$jscomp$3$$ / 2, $ignoreNul$jscomp$3$$)));
}, $stringToUTF16$$ = ($str$jscomp$15$$, $outPtr$jscomp$1$$, $maxBytesToWrite$jscomp$2_numCharsToWrite$$) => {
  $maxBytesToWrite$jscomp$2_numCharsToWrite$$ ??= 2147483647;
  if (2 > $maxBytesToWrite$jscomp$2_numCharsToWrite$$) {
    return 0;
  }
  $maxBytesToWrite$jscomp$2_numCharsToWrite$$ -= 2;
  var $startPtr$$ = $outPtr$jscomp$1$$;
  $maxBytesToWrite$jscomp$2_numCharsToWrite$$ = $maxBytesToWrite$jscomp$2_numCharsToWrite$$ < 2 * $str$jscomp$15$$.length ? $maxBytesToWrite$jscomp$2_numCharsToWrite$$ / 2 : $str$jscomp$15$$.length;
  for (var $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $maxBytesToWrite$jscomp$2_numCharsToWrite$$; ++$i$jscomp$26$$) {
    $HEAP16$$[$outPtr$jscomp$1$$ >> 1] = $str$jscomp$15$$.charCodeAt($i$jscomp$26$$), $outPtr$jscomp$1$$ += 2;
  }
  $HEAP16$$[$outPtr$jscomp$1$$ >> 1] = 0;
  return $outPtr$jscomp$1$$ - $startPtr$$;
}, $lengthBytesUTF16$$ = $str$jscomp$16$$ => 2 * $str$jscomp$16$$.length, $UTF32ToString$$ = ($ptr$jscomp$11_startIdx$jscomp$1$$, $maxBytesToRead$jscomp$4$$, $ignoreNul$jscomp$4$$) => {
  var $str$jscomp$17$$ = "";
  $ptr$jscomp$11_startIdx$jscomp$1$$ >>= 2;
  for (var $i$jscomp$27$$ = 0; !($i$jscomp$27$$ >= $maxBytesToRead$jscomp$4$$ / 4); $i$jscomp$27$$++) {
    var $utf32$$ = $HEAPU32$$[$ptr$jscomp$11_startIdx$jscomp$1$$ + $i$jscomp$27$$];
    if (!$utf32$$ && !$ignoreNul$jscomp$4$$) {
      break;
    }
    $str$jscomp$17$$ += String.fromCodePoint($utf32$$);
  }
  return $str$jscomp$17$$;
}, $stringToUTF32$$ = ($str$jscomp$18$$, $outPtr$jscomp$2$$, $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$) => {
  $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$ ??= 2147483647;
  if (4 > $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$) {
    return 0;
  }
  var $startPtr$jscomp$1$$ = $outPtr$jscomp$2$$;
  $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$ = $startPtr$jscomp$1$$ + $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$ - 4;
  for (var $i$jscomp$28$$ = 0; $i$jscomp$28$$ < $str$jscomp$18$$.length; ++$i$jscomp$28$$) {
    var $codePoint$jscomp$1$$ = $str$jscomp$18$$.codePointAt($i$jscomp$28$$);
    65535 < $codePoint$jscomp$1$$ && $i$jscomp$28$$++;
    $HEAP32$$[$outPtr$jscomp$2$$ >> 2] = $codePoint$jscomp$1$$;
    $outPtr$jscomp$2$$ += 4;
    if ($outPtr$jscomp$2$$ + 4 > $endPtr$jscomp$1_maxBytesToWrite$jscomp$3$$) {
      break;
    }
  }
  $HEAP32$$[$outPtr$jscomp$2$$ >> 2] = 0;
  return $outPtr$jscomp$2$$ - $startPtr$jscomp$1$$;
}, $lengthBytesUTF32$$ = $str$jscomp$19$$ => {
  for (var $len$jscomp$10$$ = 0, $i$jscomp$29$$ = 0; $i$jscomp$29$$ < $str$jscomp$19$$.length; ++$i$jscomp$29$$) {
    65535 < $str$jscomp$19$$.codePointAt($i$jscomp$29$$) && $i$jscomp$29$$++, $len$jscomp$10$$ += 4;
  }
  return $len$jscomp$10$$;
}, $isLeapYear$$ = $year$jscomp$1$$ => 0 === $year$jscomp$1$$ % 4 && (0 !== $year$jscomp$1$$ % 100 || 0 === $year$jscomp$1$$ % 400), $MONTH_DAYS_LEAP_CUMULATIVE$$ = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], $MONTH_DAYS_REGULAR_CUMULATIVE$$ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], $specialHTMLTargets$$ = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0], $findEventTarget$$ = $cString$jscomp$inline_102_target$jscomp$92$$ => 
{
  $cString$jscomp$inline_102_target$jscomp$92$$ = 2 < $cString$jscomp$inline_102_target$jscomp$92$$ ? $UTF8ToString$$($cString$jscomp$inline_102_target$jscomp$92$$) : $cString$jscomp$inline_102_target$jscomp$92$$;
  return $specialHTMLTargets$$[$cString$jscomp$inline_102_target$jscomp$92$$] || ("undefined" != typeof document ? document.querySelector($cString$jscomp$inline_102_target$jscomp$92$$) : null);
}, $_emscripten_set_main_loop_timing$$ = ($mode$jscomp$54$$, $value$jscomp$126$$) => {
  $MainLoop$timingMode$$ = $mode$jscomp$54$$;
  $MainLoop$timingValue$$ = $value$jscomp$126$$;
  if ($MainLoop$func$$) {
    if ($MainLoop$running$$ ||= !0, 0 == $mode$jscomp$54$$) {
      $MainLoop$scheduler$$ = function() {
        setTimeout($MainLoop$runner$$, Math.max(0, $MainLoop$tickStartTime$$ + $value$jscomp$126$$ - performance.now()) | 0);
      };
    } else if (1 == $mode$jscomp$54$$) {
      $MainLoop$scheduler$$ = function() {
        $MainLoop$requestAnimationFrame$$($MainLoop$runner$$);
      };
    } else if (2 == $mode$jscomp$54$$) {
      if ("undefined" == typeof $MainLoop$setImmediate$$) {
        if ("undefined" == typeof setImmediate) {
          var $setImmediates$$ = [];
          addEventListener("message", $event$jscomp$16$$ => {
            if ("setimmediate" === $event$jscomp$16$$.data || "setimmediate" === $event$jscomp$16$$.data.target) {
              $event$jscomp$16$$.stopPropagation(), $setImmediates$$.shift()();
            }
          }, !0);
          $MainLoop$setImmediate$$ = $func$jscomp$8$$ => {
            $setImmediates$$.push($func$jscomp$8$$);
            if ($ENVIRONMENT_IS_WORKER$$) {
              let $$jscomp$logical$assign$tmp362134484$7$$;
              ($$jscomp$logical$assign$tmp362134484$7$$ = $Module$$).setImmediates ?? ($$jscomp$logical$assign$tmp362134484$7$$.setImmediates = []);
              $Module$$.setImmediates.push($func$jscomp$8$$);
              postMessage({target:"setimmediate"});
            } else {
              postMessage("setimmediate", "*");
            }
          };
        } else {
          $MainLoop$setImmediate$$ = setImmediate;
        }
      }
      $MainLoop$scheduler$$ = function() {
        $MainLoop$setImmediate$$($MainLoop$runner$$);
      };
    }
  }
}, $_proc_exit$$ = $code$jscomp$7$$ => {
  $EXITSTATUS$$ = $code$jscomp$7$$;
  $noExitRuntime$$ || ($Module$$.onExit?.($code$jscomp$7$$), $ABORT$$ = !0);
  $quit_$$($code$jscomp$7$$, new $ExitStatus$$($code$jscomp$7$$));
}, $handleException$$ = $e$jscomp$32$$ => {
  $e$jscomp$32$$ instanceof $ExitStatus$$ || "unwind" == $e$jscomp$32$$ || $quit_$$(1, $e$jscomp$32$$);
}, $maybeExit$$ = () => {
  if (!$noExitRuntime$$) {
    try {
      var $status$jscomp$inline_104$$ = $EXITSTATUS$$;
      $EXITSTATUS$$ = $status$jscomp$inline_104$$;
      $_proc_exit$$($status$jscomp$inline_104$$);
    } catch ($e$jscomp$33$$) {
      $handleException$$($e$jscomp$33$$);
    }
  }
}, $setMainLoop$$ = ($iterFunc$$, $fps$$, $simulateInfiniteLoop$$, $arg$jscomp$12$$, $noSetTiming$$) => {
  function $checkIsRunning$$() {
    return $thisMainLoopId$$ < $MainLoop$currentlyRunningMainloop$$ ? ($maybeExit$$(), !1) : !0;
  }
  $MainLoop$func$$ = $iterFunc$$;
  $MainLoop$arg$$ = $arg$jscomp$12$$;
  var $thisMainLoopId$$ = $MainLoop$currentlyRunningMainloop$$;
  $MainLoop$running$$ = !1;
  $MainLoop$runner$$ = function() {
    if (!$ABORT$$) {
      if (0 < $MainLoop$queue$$.length) {
        var $blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$ = $MainLoop$queue$$.shift();
        $blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$.$func$($blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$.$arg$);
        if ($MainLoop$remainingBlockers$$) {
          var $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ = $MainLoop$remainingBlockers$$, $expected$jscomp$inline_108_next$jscomp$1$$ = 0 == $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ % 1 ? $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ - 1 : Math.floor($post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$);
          $MainLoop$remainingBlockers$$ = $blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$.$counted$ ? $expected$jscomp$inline_108_next$jscomp$1$$ : (8 * $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ + ($expected$jscomp$inline_108_next$jscomp$1$$ + 0.5)) / 9;
        }
        $Module$$.setStatus && ($blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$ = $Module$$.statusMessage || "Please wait...", $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ = $MainLoop$remainingBlockers$$ ?? 0, $expected$jscomp$inline_108_next$jscomp$1$$ = $MainLoop$$.$expectedBlockers$ ?? 0, $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ ? $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ < $expected$jscomp$inline_108_next$jscomp$1$$ ? 
        $Module$$.setStatus("{message} ({expected - remaining}/{expected})") : $Module$$.setStatus($blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$) : $Module$$.setStatus(""));
        $checkIsRunning$$() && setTimeout($MainLoop$runner$$, 0);
      } else {
        if ($checkIsRunning$$()) {
          if ($MainLoop$currentFrameNumber$$ = $MainLoop$currentFrameNumber$$ + 1 | 0, 1 == $MainLoop$timingMode$$ && 1 < $MainLoop$timingValue$$ && 0 != $MainLoop$currentFrameNumber$$ % $MainLoop$timingValue$$) {
            $MainLoop$scheduler$$();
          } else {
            0 == $MainLoop$timingMode$$ && ($MainLoop$tickStartTime$$ = performance.now());
            a: {
              if (!$ABORT$$) {
                for ($blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$ of $MainLoop$preMainLoop$$) {
                  if (!1 === $blocker_message$jscomp$inline_106_pre$jscomp$inline_111$$()) {
                    break a;
                  }
                }
                if (!$ABORT$$) {
                  try {
                    $iterFunc$$(), $maybeExit$$();
                  } catch ($e$jscomp$inline_344$$) {
                    $handleException$$($e$jscomp$inline_344$$);
                  }
                }
                for ($post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$ of $MainLoop$postMainLoop$$) {
                  $post$jscomp$inline_112_remaining_remaining$jscomp$inline_107$$();
                }
              }
            }
            $checkIsRunning$$() && $MainLoop$scheduler$$();
          }
        }
      }
    }
  };
  $noSetTiming$$ || (0 < $fps$$ ? $_emscripten_set_main_loop_timing$$(0, 1000.0 / $fps$$) : $_emscripten_set_main_loop_timing$$(1, 1), $MainLoop$scheduler$$());
  if ($simulateInfiniteLoop$$) {
    throw "unwind";
  }
}, $MainLoop$running$$ = !1, $MainLoop$scheduler$$ = null, $MainLoop$currentlyRunningMainloop$$ = 0, $MainLoop$func$$ = null, $MainLoop$arg$$ = 0, $MainLoop$timingMode$$ = 0, $MainLoop$timingValue$$ = 0, $MainLoop$currentFrameNumber$$ = 0, $MainLoop$queue$$ = [], $MainLoop$preMainLoop$$ = [], $MainLoop$postMainLoop$$ = [];
function $MainLoop$pause$$() {
  $MainLoop$scheduler$$ = null;
  $MainLoop$currentlyRunningMainloop$$++;
}
function $MainLoop$resume$$() {
  $MainLoop$currentlyRunningMainloop$$++;
  var $timingMode$$ = $MainLoop$timingMode$$, $timingValue$$ = $MainLoop$timingValue$$, $func$jscomp$10$$ = $MainLoop$func$$;
  $MainLoop$func$$ = null;
  $setMainLoop$$($func$jscomp$10$$, 0, !1, $MainLoop$arg$$, !0);
  $_emscripten_set_main_loop_timing$$($timingMode$$, $timingValue$$);
  $MainLoop$scheduler$$();
}
var $MainLoop$nextRAF$$ = 0;
function $MainLoop$requestAnimationFrame$$($func$jscomp$13$$) {
  if ("function" == typeof requestAnimationFrame) {
    requestAnimationFrame($func$jscomp$13$$);
  } else {
    var $now$jscomp$inline_115$$ = Date.now();
    if (0 === $MainLoop$nextRAF$$) {
      $MainLoop$nextRAF$$ = $now$jscomp$inline_115$$ + 1000 / 60;
    } else {
      for (; $now$jscomp$inline_115$$ + 2 >= $MainLoop$nextRAF$$;) {
        $MainLoop$nextRAF$$ += 1000 / 60;
      }
    }
    setTimeout($func$jscomp$13$$, Math.max($MainLoop$nextRAF$$ - $now$jscomp$inline_115$$, 0));
  }
}
var $MainLoop$$ = {}, $MainLoop$tickStartTime$$, $MainLoop$runner$$, $MainLoop$setImmediate$$, $MainLoop$remainingBlockers$$, $wasmTable$$;
function $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$32$$) {
  var $h$jscomp$9$$ = $JSEvents$$.$eventHandlers$[$i$jscomp$32$$];
  $h$jscomp$9$$.target.removeEventListener($h$jscomp$9$$.$eventTypeString$, $h$jscomp$9$$.$eventListenerFunc$, $h$jscomp$9$$.$useCapture$);
  $JSEvents$$.$eventHandlers$.splice($i$jscomp$32$$, 1);
}
function $JSCompiler_StaticMethods_runDeferredCalls$$() {
  if (navigator.userActivation ? navigator.userActivation.isActive : $JSEvents$$.$inEventHandler$ && $JSEvents$$.$currentEventHandler$.$allowsDeferredCalls$) {
    var $deferredCalls$$ = $JSEvents$$.$deferredCalls$;
    $JSEvents$$.$deferredCalls$ = [];
    for (var $call$jscomp$2$$ of $deferredCalls$$) {
      $call$jscomp$2$$.$targetFunction$(...$call$jscomp$2$$.$argsList$);
    }
  }
}
function $JSCompiler_StaticMethods_registerOrRemoveHandler$$($eventHandler$$) {
  if (!$eventHandler$$.target) {
    return -4;
  }
  if ($eventHandler$$.$callbackfunc$) {
    $eventHandler$$.$eventListenerFunc$ = function($event$jscomp$17$$) {
      ++$JSEvents$$.$inEventHandler$;
      $JSEvents$$.$currentEventHandler$ = $eventHandler$$;
      $JSCompiler_StaticMethods_runDeferredCalls$$();
      $eventHandler$$.$handlerFunc$($event$jscomp$17$$);
      $JSCompiler_StaticMethods_runDeferredCalls$$();
      --$JSEvents$$.$inEventHandler$;
    }, $eventHandler$$.target.addEventListener($eventHandler$$.$eventTypeString$, $eventHandler$$.$eventListenerFunc$, $eventHandler$$.$useCapture$), $JSEvents$$.$eventHandlers$.push($eventHandler$$);
  } else {
    for (var $i$jscomp$33$$ = 0; $i$jscomp$33$$ < $JSEvents$$.$eventHandlers$.length; ++$i$jscomp$33$$) {
      $JSEvents$$.$eventHandlers$[$i$jscomp$33$$].target == $eventHandler$$.target && $JSEvents$$.$eventHandlers$[$i$jscomp$33$$].$eventTypeString$ == $eventHandler$$.$eventTypeString$ && $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$33$$--);
    }
  }
  return 0;
}
var $JSEvents$$ = {$batteryEvent$:0, $gamepadEvent$:0, $keyEvent$:0, $mouseEvent$:0, $wheelEvent$:0, $uiEvent$:0, $focusEvent$:0, $deviceOrientationEvent$:0, $orientationChangeEvent$:0, $deviceMotionEvent$:0, $fullscreenChangeEvent$:0, $pointerlockChangeEvent$:0, $visibilityChangeEvent$:0, $touchEvent$:0, $memcpy$($target$jscomp$94$$, $src$jscomp$4$$, $size$jscomp$32$$) {
  $HEAP8$$.set($HEAP8$$.subarray($src$jscomp$4$$, $src$jscomp$4$$ + $size$jscomp$32$$), $target$jscomp$94$$);
}, $removeAllEventListeners$() {
  for (; $JSEvents$$.$eventHandlers$.length;) {
    $JSCompiler_StaticMethods__removeHandler$$($JSEvents$$.$eventHandlers$.length - 1);
  }
  $JSEvents$$.$deferredCalls$ = [];
}, $inEventHandler$:0, $deferredCalls$:[], $deferCall$($targetFunction$$, $precedence$$, $argsList$$) {
  function $arraysHaveEqualContent$$($arrA$$, $arrB$$) {
    if ($arrA$$.length != $arrB$$.length) {
      return !1;
    }
    for (var $i$jscomp$30$$ in $arrA$$) {
      if ($arrA$$[$i$jscomp$30$$] != $arrB$$[$i$jscomp$30$$]) {
        return !1;
      }
    }
    return !0;
  }
  for (var $call$$ of $JSEvents$$.$deferredCalls$) {
    if ($call$$.$targetFunction$ == $targetFunction$$ && $arraysHaveEqualContent$$($call$$.$argsList$, $argsList$$)) {
      return;
    }
  }
  $JSEvents$$.$deferredCalls$.push({$targetFunction$:$targetFunction$$, $precedence$:$precedence$$, $argsList$:$argsList$$});
  $JSEvents$$.$deferredCalls$.sort(($x$jscomp$92$$, $y$jscomp$77$$) => $x$jscomp$92$$.$precedence$ < $y$jscomp$77$$.$precedence$);
}, $removeDeferredCalls$($targetFunction$jscomp$1$$) {
  $JSEvents$$.$deferredCalls$ = $JSEvents$$.$deferredCalls$.filter($call$jscomp$1$$ => $call$jscomp$1$$.$targetFunction$ != $targetFunction$jscomp$1$$);
}, $eventHandlers$:[], $removeAllHandlersOnTarget$:($target$jscomp$95$$, $eventTypeString$$) => {
  for (var $i$jscomp$31$$ = 0; $i$jscomp$31$$ < $JSEvents$$.$eventHandlers$.length; ++$i$jscomp$31$$) {
    $JSEvents$$.$eventHandlers$[$i$jscomp$31$$].target != $target$jscomp$95$$ || $eventTypeString$$ && $eventTypeString$$ != $JSEvents$$.$eventHandlers$[$i$jscomp$31$$].$eventTypeString$ || $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$31$$--);
  }
}, $getNodeNameForTarget$($target$jscomp$96$$) {
  return $target$jscomp$96$$ ? $target$jscomp$96$$ == window ? "#window" : $target$jscomp$96$$ == screen ? "#screen" : $target$jscomp$96$$?.nodeName || "" : "";
}, fullscreenEnabled() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
}}, $registerUiEventCallback$$ = ($target$jscomp$97$$, $userData$$, $useCapture$$, $callbackfunc$$) => {
  $JSEvents$$.$uiEvent$ || ($JSEvents$$.$uiEvent$ = $_malloc$$(36));
  $target$jscomp$97$$ = $findEventTarget$$($target$jscomp$97$$);
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$97$$, $eventTypeString$:"resize", $callbackfunc$:$callbackfunc$$, $handlerFunc$:($e$jscomp$36$$ = event) => {
    if ($e$jscomp$36$$.target == $target$jscomp$97$$) {
      var $b$jscomp$3$$ = document.body;
      if ($b$jscomp$3$$) {
        var $uiEvent$$ = $JSEvents$$.$uiEvent$;
        $HEAP32$$[$uiEvent$$ >> 2] = 0;
        $HEAP32$$[$uiEvent$$ + 4 >> 2] = $b$jscomp$3$$.clientWidth;
        $HEAP32$$[$uiEvent$$ + 8 >> 2] = $b$jscomp$3$$.clientHeight;
        $HEAP32$$[$uiEvent$$ + 12 >> 2] = innerWidth;
        $HEAP32$$[$uiEvent$$ + 16 >> 2] = innerHeight;
        $HEAP32$$[$uiEvent$$ + 20 >> 2] = outerWidth;
        $HEAP32$$[$uiEvent$$ + 24 >> 2] = outerHeight;
        $HEAP32$$[$uiEvent$$ + 28 >> 2] = pageXOffset | 0;
        $HEAP32$$[$uiEvent$$ + 32 >> 2] = pageYOffset | 0;
        $wasmTable$$.get($callbackfunc$$)(10, $uiEvent$$, $userData$$) && $e$jscomp$36$$.preventDefault();
      }
    }
  }, $useCapture$:$useCapture$$});
}, $ENV$$ = {}, $getEnvStrings$$ = () => {
  if (!$getEnvStrings$strings$$) {
    var $env$jscomp$1$$ = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.language || "C").replace("-", "_") + ".UTF-8", _:$thisProgram$$ || "./this.program"}, $x$jscomp$93$$;
    for ($x$jscomp$93$$ in $ENV$$) {
      void 0 === $ENV$$[$x$jscomp$93$$] ? delete $env$jscomp$1$$[$x$jscomp$93$$] : $env$jscomp$1$$[$x$jscomp$93$$] = $ENV$$[$x$jscomp$93$$];
    }
    var $strings$$ = [];
    for ($x$jscomp$93$$ in $env$jscomp$1$$) {
      $strings$$.push(`${$x$jscomp$93$$}=${$env$jscomp$1$$[$x$jscomp$93$$]}`);
    }
    $getEnvStrings$strings$$ = $strings$$;
  }
  return $getEnvStrings$strings$$;
}, $getEnvStrings$strings$$, $GLctx$$, $webgl_enable_ANGLE_instanced_arrays$$ = $ctx$$ => {
  var $ext$jscomp$1$$ = $ctx$$.getExtension("ANGLE_instanced_arrays");
  $ext$jscomp$1$$ && ($ctx$$.vertexAttribDivisor = ($index$jscomp$102$$, $divisor$jscomp$3$$) => $ext$jscomp$1$$.vertexAttribDivisorANGLE($index$jscomp$102$$, $divisor$jscomp$3$$), $ctx$$.drawArraysInstanced = ($mode$jscomp$55$$, $first$jscomp$4$$, $count$jscomp$39$$, $primcount$jscomp$2$$) => $ext$jscomp$1$$.drawArraysInstancedANGLE($mode$jscomp$55$$, $first$jscomp$4$$, $count$jscomp$39$$, $primcount$jscomp$2$$), $ctx$$.drawElementsInstanced = ($mode$jscomp$56$$, $count$jscomp$40$$, $type$jscomp$176$$, 
  $indices$$, $primcount$jscomp$3$$) => $ext$jscomp$1$$.drawElementsInstancedANGLE($mode$jscomp$56$$, $count$jscomp$40$$, $type$jscomp$176$$, $indices$$, $primcount$jscomp$3$$));
}, $webgl_enable_OES_vertex_array_object$$ = $ctx$jscomp$1$$ => {
  var $ext$jscomp$2$$ = $ctx$jscomp$1$$.getExtension("OES_vertex_array_object");
  $ext$jscomp$2$$ && ($ctx$jscomp$1$$.createVertexArray = () => $ext$jscomp$2$$.createVertexArrayOES(), $ctx$jscomp$1$$.deleteVertexArray = $vao$$ => $ext$jscomp$2$$.deleteVertexArrayOES($vao$$), $ctx$jscomp$1$$.bindVertexArray = $vao$jscomp$1$$ => $ext$jscomp$2$$.bindVertexArrayOES($vao$jscomp$1$$), $ctx$jscomp$1$$.isVertexArray = $vao$jscomp$2$$ => $ext$jscomp$2$$.isVertexArrayOES($vao$jscomp$2$$));
}, $webgl_enable_WEBGL_draw_buffers$$ = $ctx$jscomp$2$$ => {
  var $ext$jscomp$3$$ = $ctx$jscomp$2$$.getExtension("WEBGL_draw_buffers");
  $ext$jscomp$3$$ && ($ctx$jscomp$2$$.drawBuffers = ($n$jscomp$5$$, $bufs$$) => $ext$jscomp$3$$.drawBuffersWEBGL($n$jscomp$5$$, $bufs$$));
}, $getEmscriptenSupportedExtensions$$ = $ctx$jscomp$9$$ => {
  var $supportedExtensions$$ = "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
  return ($ctx$jscomp$9$$.getSupportedExtensions() || []).filter($ext$jscomp$4$$ => $supportedExtensions$$.includes($ext$jscomp$4$$));
}, $GL$counter$$ = 1, $GL$buffers$$ = [], $GL$programs$$ = [], $GL$framebuffers$$ = [], $GL$renderbuffers$$ = [], $GL$textures$$ = [], $GL$shaders$$ = [], $GL$vaos$$ = [], $GL$contexts$$ = [], $GL$stringCache$$ = {}, $GL$getNewId$$ = $table$$ => {
  for (var $ret$jscomp$10$$ = $GL$counter$$++, $i$jscomp$36$$ = $table$$.length; $i$jscomp$36$$ < $ret$jscomp$10$$; $i$jscomp$36$$++) {
    $table$$[$i$jscomp$36$$] = null;
  }
  return $ret$jscomp$10$$;
}, $GL$genObject$$ = ($n$jscomp$6$$, $buffers$jscomp$2$$, $createFunction$$, $objectTable$$) => {
  for (var $i$jscomp$37$$ = 0; $i$jscomp$37$$ < $n$jscomp$6$$; $i$jscomp$37$$++) {
    var $buffer$jscomp$41$$ = $GLctx$$[$createFunction$$](), $id$jscomp$11$$ = $buffer$jscomp$41$$ && $GL$getNewId$$($objectTable$$);
    $buffer$jscomp$41$$ ? ($buffer$jscomp$41$$.name = $id$jscomp$11$$, $objectTable$$[$id$jscomp$11$$] = $buffer$jscomp$41$$) : $GL$lastError$$ ||= 1282;
    $HEAP32$$[$buffers$jscomp$2$$ + 4 * $i$jscomp$37$$ >> 2] = $id$jscomp$11$$;
  }
}, $GL$createContext$$ = ($canvas$$, $webGLContextAttributes$$) => {
  $canvas$$.$g$ || ($canvas$$.$g$ = $canvas$$.getContext, $canvas$$.getContext = function($ver$$, $attrs_gl$$) {
    $attrs_gl$$ = $canvas$$.$g$($ver$$, $attrs_gl$$);
    return "webgl" == $ver$$ == $attrs_gl$$ instanceof WebGLRenderingContext ? $attrs_gl$$ : null;
  });
  var $ctx$jscomp$10$$ = 1 < $webGLContextAttributes$$.$majorVersion$ ? $canvas$$.getContext("webgl2", $webGLContextAttributes$$) : $canvas$$.getContext("webgl", $webGLContextAttributes$$);
  return $ctx$jscomp$10$$ ? $GL$registerContext$$($ctx$jscomp$10$$, $webGLContextAttributes$$) : 0;
}, $GL$registerContext$$ = ($ctx$jscomp$11$$, $webGLContextAttributes$jscomp$1$$) => {
  var $handle$jscomp$18$$ = $GL$getNewId$$($GL$contexts$$), $context$jscomp$6$$ = {handle:$handle$jscomp$18$$, attributes:$webGLContextAttributes$jscomp$1$$, version:$webGLContextAttributes$jscomp$1$$.$majorVersion$, $GLctx$:$ctx$jscomp$11$$};
  $ctx$jscomp$11$$.canvas && ($ctx$jscomp$11$$.canvas.$GLctxObject$ = $context$jscomp$6$$);
  $GL$contexts$$[$handle$jscomp$18$$] = $context$jscomp$6$$;
  ("undefined" == typeof $webGLContextAttributes$jscomp$1$$.$enableExtensionsByDefault$ || $webGLContextAttributes$jscomp$1$$.$enableExtensionsByDefault$) && $GL$initExtensions$$($context$jscomp$6$$);
  return $handle$jscomp$18$$;
}, $GL$initExtensions$$ = $context$jscomp$7$$ => {
  $context$jscomp$7$$ ||= $GL$currentContext$$;
  if (!$context$jscomp$7$$.$initExtensionsDone$) {
    $context$jscomp$7$$.$initExtensionsDone$ = !0;
    var $GLctx$jscomp$1$$ = $context$jscomp$7$$.$GLctx$;
    $GLctx$jscomp$1$$.$multiDrawWebgl$ = $GLctx$jscomp$1$$.getExtension("WEBGL_multi_draw");
    $GLctx$jscomp$1$$.$extPolygonOffsetClamp$ = $GLctx$jscomp$1$$.getExtension("EXT_polygon_offset_clamp");
    $GLctx$jscomp$1$$.$extClipControl$ = $GLctx$jscomp$1$$.getExtension("EXT_clip_control");
    $GLctx$jscomp$1$$.$webglPolygonMode$ = $GLctx$jscomp$1$$.getExtension("WEBGL_polygon_mode");
    $webgl_enable_ANGLE_instanced_arrays$$($GLctx$jscomp$1$$);
    $webgl_enable_OES_vertex_array_object$$($GLctx$jscomp$1$$);
    $webgl_enable_WEBGL_draw_buffers$$($GLctx$jscomp$1$$);
    $GLctx$jscomp$1$$.$dibvbi$ = $GLctx$jscomp$1$$.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
    $GLctx$jscomp$1$$.$mdibvbi$ = $GLctx$jscomp$1$$.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
    2 <= $context$jscomp$7$$.version && ($GLctx$jscomp$1$$.$disjointTimerQueryExt$ = $GLctx$jscomp$1$$.getExtension("EXT_disjoint_timer_query_webgl2"));
    if (2 > $context$jscomp$7$$.version || !$GLctx$jscomp$1$$.$disjointTimerQueryExt$) {
      $GLctx$jscomp$1$$.$disjointTimerQueryExt$ = $GLctx$jscomp$1$$.getExtension("EXT_disjoint_timer_query");
    }
    $getEmscriptenSupportedExtensions$$($GLctx$jscomp$1$$).forEach($ext$jscomp$5$$ => {
      $ext$jscomp$5$$.includes("lose_context") || $ext$jscomp$5$$.includes("debug") || $GLctx$jscomp$1$$.getExtension($ext$jscomp$5$$);
    });
  }
}, $GL$$ = {}, $GL$lastError$$, $GL$currentContext$$, $tempFixedLengthArray$$ = [], $__glGetActiveAttribOrUniform$$ = ($funcName_info$jscomp$2$$, $program$jscomp$67$$, $index$jscomp$105$$, $bufSize$jscomp$2_numBytesWrittenExclNull$$, $length$jscomp$50$$, $size$jscomp$34$$, $type$jscomp$178$$, $name$jscomp$114$$) => {
  $program$jscomp$67$$ = $GL$programs$$[$program$jscomp$67$$];
  if ($funcName_info$jscomp$2$$ = $GLctx$$[$funcName_info$jscomp$2$$]($program$jscomp$67$$, $index$jscomp$105$$)) {
    $bufSize$jscomp$2_numBytesWrittenExclNull$$ = $name$jscomp$114$$ && $stringToUTF8Array$$($funcName_info$jscomp$2$$.name, $HEAPU8$$, $name$jscomp$114$$, $bufSize$jscomp$2_numBytesWrittenExclNull$$), $length$jscomp$50$$ && ($HEAP32$$[$length$jscomp$50$$ >> 2] = $bufSize$jscomp$2_numBytesWrittenExclNull$$), $size$jscomp$34$$ && ($HEAP32$$[$size$jscomp$34$$ >> 2] = $funcName_info$jscomp$2$$.size), $type$jscomp$178$$ && ($HEAP32$$[$type$jscomp$178$$ >> 2] = $funcName_info$jscomp$2$$.type);
  }
}, $stringToNewUTF8$$ = $str$jscomp$21$$ => {
  var $size$jscomp$37$$ = $lengthBytesUTF8$$($str$jscomp$21$$) + 1, $ret$jscomp$11$$ = $_malloc$$($size$jscomp$37$$);
  $ret$jscomp$11$$ && $stringToUTF8Array$$($str$jscomp$21$$, $HEAPU8$$, $ret$jscomp$11$$, $size$jscomp$37$$);
  return $ret$jscomp$11$$;
}, $webglGetExtensions$$ = () => {
  var $exts$$ = $getEmscriptenSupportedExtensions$$($GLctx$$);
  return $exts$$ = $exts$$.concat($exts$$.map($e$jscomp$41$$ => "GL_" + $e$jscomp$41$$));
}, $webglGetLeftBracePos$$ = $name$jscomp$118$$ => "]" == $name$jscomp$118$$.slice(-1) && $name$jscomp$118$$.lastIndexOf("["), $heapObjectForWebGLType$$ = $type$jscomp$181$$ => {
  $type$jscomp$181$$ -= 5120;
  return 0 == $type$jscomp$181$$ ? $HEAP8$$ : 1 == $type$jscomp$181$$ ? $HEAPU8$$ : 2 == $type$jscomp$181$$ ? $HEAP16$$ : 4 == $type$jscomp$181$$ ? $HEAP32$$ : 6 == $type$jscomp$181$$ ? $HEAPF32$$ : 5 == $type$jscomp$181$$ || 28922 == $type$jscomp$181$$ || 28520 == $type$jscomp$181$$ || 30779 == $type$jscomp$181$$ || 30782 == $type$jscomp$181$$ ? $HEAPU32$$ : $HEAPU16$$;
}, $webglGetUniformLocation$$ = $location$jscomp$79$$ => {
  var $p$jscomp$9$$ = $GLctx$$.$currentProgram$;
  if ($p$jscomp$9$$) {
    var $webglLoc$$ = $p$jscomp$9$$.$uniformLocsById$[$location$jscomp$79$$];
    "number" == typeof $webglLoc$$ && ($p$jscomp$9$$.$uniformLocsById$[$location$jscomp$79$$] = $webglLoc$$ = $GLctx$$.getUniformLocation($p$jscomp$9$$, $p$jscomp$9$$.$uniformArrayNamesById$[$location$jscomp$79$$] + (0 < $webglLoc$$ ? `[${$webglLoc$$}]` : "")));
    return $webglLoc$$;
  }
  $GL$lastError$$ ||= 1282;
}, $miniTempWebGLFloatBuffers$$ = [];
function $getFullscreenElement$$() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement || document.msFullscreenElement;
}
var $safeSetTimeout$$ = $func$jscomp$15$$ => {
  setTimeout(() => {
    if (!$ABORT$$) {
      try {
        $func$jscomp$15$$(), $maybeExit$$();
      } catch ($e$jscomp$inline_347$$) {
        $handleException$$($e$jscomp$inline_347$$);
      }
    }
  }, 10000);
}, $Browser$isFullscreen$$ = !1, $Browser$pointerLock$$ = !1, $Browser$moduleContextCreatedCallbacks$$ = [];
function $Browser$init$$() {
  function $pointerLockChange$$() {
    $Browser$pointerLock$$ = document.pointerLockElement === $Module$$.canvas;
  }
  if (!$Browser$initted$$) {
    $Browser$initted$$ = !0;
    $preloadPlugins$$.push({canHandle:function($name$jscomp$120$$) {
      return !$Module$$.noImageDecoding && /\.(jpg|jpeg|png|bmp|webp)$/i.test($name$jscomp$120$$);
    }, handle:async function($byteArray$jscomp$5$$, $name$jscomp$121$$) {
      var $b$jscomp$4$$ = new Blob([$byteArray$jscomp$5$$], {type:$Browser$getMimetype$$($name$jscomp$121$$)});
      $b$jscomp$4$$.size !== $byteArray$jscomp$5$$.length && ($b$jscomp$4$$ = new Blob([(new Uint8Array($byteArray$jscomp$5$$)).buffer], {type:$Browser$getMimetype$$($name$jscomp$121$$)}));
      var $url$jscomp$32$$ = URL.createObjectURL($b$jscomp$4$$);
      return new Promise(($resolve$jscomp$2$$, $reject$jscomp$2$$) => {
        var $img$jscomp$2$$ = new Image();
        $img$jscomp$2$$.onload = () => {
          var $canvas$jscomp$2$$ = document.createElement("canvas");
          $canvas$jscomp$2$$.width = $img$jscomp$2$$.width;
          $canvas$jscomp$2$$.height = $img$jscomp$2$$.height;
          $canvas$jscomp$2$$.getContext("2d").drawImage($img$jscomp$2$$, 0, 0);
          URL.revokeObjectURL($url$jscomp$32$$);
          $resolve$jscomp$2$$($byteArray$jscomp$5$$);
        };
        $img$jscomp$2$$.onerror = () => {
          $err$$(`Image ${$url$jscomp$32$$} could not be decoded`);
          $reject$jscomp$2$$();
        };
        $img$jscomp$2$$.src = $url$jscomp$32$$;
      });
    }});
    $preloadPlugins$$.push({canHandle:function($name$jscomp$122$$) {
      return !$Module$$.noAudioDecoding && $name$jscomp$122$$.slice(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:async function($byteArray$jscomp$6$$, $name$jscomp$123$$) {
      return new Promise($resolve$jscomp$3$$ => {
        function $finish$$() {
          $done$jscomp$2$$ || ($done$jscomp$2$$ = !0, $resolve$jscomp$3$$($byteArray$jscomp$6$$));
        }
        var $done$jscomp$2$$ = !1, $b$jscomp$5_url$jscomp$33$$ = new Blob([$byteArray$jscomp$6$$], {type:$Browser$getMimetype$$($name$jscomp$123$$)});
        $b$jscomp$5_url$jscomp$33$$ = URL.createObjectURL($b$jscomp$5_url$jscomp$33$$);
        var $audio$jscomp$1$$ = new Audio();
        $audio$jscomp$1$$.addEventListener("canplaythrough", () => $finish$$($audio$jscomp$1$$), !1);
        $audio$jscomp$1$$.onerror = function() {
          if (!$done$jscomp$2$$) {
            $err$$(`warning: browser could not fully decode audio ${$name$jscomp$123$$}, trying slower base64 approach`);
            for (var $JSCompiler_temp_const$jscomp$22$$ = "data:audio/x-" + $name$jscomp$123$$.slice(-3) + ";base64,", $ret$jscomp$inline_136$$ = "", $leftchar$jscomp$inline_137$$ = 0, $leftbits$jscomp$inline_138$$ = 0, $i$jscomp$inline_139$$ = 0; $i$jscomp$inline_139$$ < $byteArray$jscomp$6$$.length; $i$jscomp$inline_139$$++) {
              for ($leftchar$jscomp$inline_137$$ = $leftchar$jscomp$inline_137$$ << 8 | $byteArray$jscomp$6$$[$i$jscomp$inline_139$$], $leftbits$jscomp$inline_138$$ += 8; 6 <= $leftbits$jscomp$inline_138$$;) {
                var $curr$jscomp$inline_140$$ = $leftchar$jscomp$inline_137$$ >> $leftbits$jscomp$inline_138$$ - 6 & 63;
                $leftbits$jscomp$inline_138$$ -= 6;
                $ret$jscomp$inline_136$$ += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[$curr$jscomp$inline_140$$];
              }
            }
            2 == $leftbits$jscomp$inline_138$$ ? ($ret$jscomp$inline_136$$ += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[($leftchar$jscomp$inline_137$$ & 3) << 4], $ret$jscomp$inline_136$$ += "==") : 4 == $leftbits$jscomp$inline_138$$ && ($ret$jscomp$inline_136$$ += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[($leftchar$jscomp$inline_137$$ & 15) << 2], $ret$jscomp$inline_136$$ += "=");
            $audio$jscomp$1$$.src = $JSCompiler_temp_const$jscomp$22$$ + $ret$jscomp$inline_136$$;
            $finish$$($audio$jscomp$1$$);
          }
        };
        $audio$jscomp$1$$.src = $b$jscomp$5_url$jscomp$33$$;
        $safeSetTimeout$$(() => {
          $finish$$($audio$jscomp$1$$);
        });
      });
    }});
    var $canvas$jscomp$1$$ = $Module$$.canvas;
    $canvas$jscomp$1$$ && (document.addEventListener("pointerlockchange", $pointerLockChange$$, !1), $Module$$.elementPointerLock && $canvas$jscomp$1$$.addEventListener("click", $ev$$ => {
      !$Browser$pointerLock$$ && $Module$$.canvas.requestPointerLock && ($Module$$.canvas.requestPointerLock(), $ev$$.preventDefault());
    }, !1));
  }
}
function $Browser$createContext$$($canvas$jscomp$4$$) {
  var $webGLContextAttributes$jscomp$2$$ = {antialias:1 < $GLFW$hints$$[135181], depth:0 < $GLFW$hints$$[135173], stencil:0 < $GLFW$hints$$[135174], alpha:0 < $GLFW$hints$$[135172]};
  if (!$Module$$.ctx || $canvas$jscomp$4$$ != $Module$$.canvas) {
    var $contextHandle$jscomp$3$$, $contextAttributes$$ = {antialias:!1, alpha:!1, $majorVersion$:"undefined" != typeof WebGL2RenderingContext ? 2 : 1};
    if ($webGLContextAttributes$jscomp$2$$) {
      for (var $attribute$jscomp$1$$ in $webGLContextAttributes$jscomp$2$$) {
        $contextAttributes$$[$attribute$jscomp$1$$] = $webGLContextAttributes$jscomp$2$$[$attribute$jscomp$1$$];
      }
    }
    if ("undefined" != typeof $GL$$ && ($contextHandle$jscomp$3$$ = $GL$createContext$$($canvas$jscomp$4$$, $contextAttributes$$))) {
      var $ctx$jscomp$13$$ = $GL$contexts$$[$contextHandle$jscomp$3$$].$GLctx$;
    }
    $ctx$jscomp$13$$ && ($Module$$.ctx = $ctx$jscomp$13$$, $GL$currentContext$$ = $GL$contexts$$[$contextHandle$jscomp$3$$], $Module$$.ctx = $GLctx$$ = $GL$currentContext$$?.$GLctx$, $Browser$moduleContextCreatedCallbacks$$.forEach($callback$jscomp$133$$ => $callback$jscomp$133$$()), $Browser$init$$());
  }
}
var $Browser$fullscreenHandlersInstalled$$ = !1, $Browser$lockPointer$$ = void 0, $Browser$resizeCanvas$$ = void 0;
function $Browser$requestFullscreen$$($lockPointer$$, $resizeCanvas$$) {
  function $fullscreenChange$$() {
    $Browser$isFullscreen$$ = !1;
    var $canvasContainer$jscomp$1$$ = $canvas$jscomp$5$$.parentNode;
    $getFullscreenElement$$() === $canvasContainer$jscomp$1$$ ? ($canvas$jscomp$5$$.exitFullscreen = $Browser$exitFullscreen$$, $Browser$lockPointer$$ && $canvas$jscomp$5$$.requestPointerLock(), $Browser$isFullscreen$$ = !0, $Browser$resizeCanvas$$ ? $Browser$setFullscreenCanvasSize$$() : $Browser$updateCanvasDimensions$$($canvas$jscomp$5$$)) : ($canvasContainer$jscomp$1$$.parentNode.insertBefore($canvas$jscomp$5$$, $canvasContainer$jscomp$1$$), $canvasContainer$jscomp$1$$.parentNode.removeChild($canvasContainer$jscomp$1$$), 
    $Browser$resizeCanvas$$ ? $Browser$setWindowedCanvasSize$$() : $Browser$updateCanvasDimensions$$($canvas$jscomp$5$$));
    $Module$$.onFullScreen?.($Browser$isFullscreen$$);
    $Module$$.onFullscreen?.($Browser$isFullscreen$$);
  }
  $Browser$lockPointer$$ = $lockPointer$$;
  $Browser$resizeCanvas$$ = $resizeCanvas$$;
  "undefined" == typeof $Browser$lockPointer$$ && ($Browser$lockPointer$$ = !0);
  "undefined" == typeof $Browser$resizeCanvas$$ && ($Browser$resizeCanvas$$ = !1);
  var $canvas$jscomp$5$$ = $Module$$.canvas;
  $Browser$fullscreenHandlersInstalled$$ || ($Browser$fullscreenHandlersInstalled$$ = !0, document.addEventListener("fullscreenchange", $fullscreenChange$$, !1), document.addEventListener("mozfullscreenchange", $fullscreenChange$$, !1), document.addEventListener("webkitfullscreenchange", $fullscreenChange$$, !1), document.addEventListener("MSFullscreenChange", $fullscreenChange$$, !1));
  var $canvasContainer$$ = document.createElement("div");
  $canvas$jscomp$5$$.parentNode.insertBefore($canvasContainer$$, $canvas$jscomp$5$$);
  $canvasContainer$$.appendChild($canvas$jscomp$5$$);
  $canvasContainer$$.requestFullscreen = $canvasContainer$$.requestFullscreen || $canvasContainer$$.mozRequestFullScreen || $canvasContainer$$.msRequestFullscreen || ($canvasContainer$$.webkitRequestFullscreen ? () => $canvasContainer$$.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || ($canvasContainer$$.webkitRequestFullScreen ? () => $canvasContainer$$.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
  $canvasContainer$$.requestFullscreen();
}
function $Browser$exitFullscreen$$() {
  if (!$Browser$isFullscreen$$) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {
  })).apply(document, []);
  return !0;
}
function $Browser$getMimetype$$($name$jscomp$124$$) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[$name$jscomp$124$$.slice($name$jscomp$124$$.lastIndexOf(".") + 1)];
}
var $Browser$mouseX$$ = 0, $Browser$mouseY$$ = 0, $Browser$mouseMovementX$$ = 0, $Browser$mouseMovementY$$ = 0;
function $Browser$calculateMouseCoords$$($adjustedX_pageX$jscomp$1$$, $adjustedY_pageY$jscomp$1$$) {
  var $canvas$jscomp$6$$ = $Module$$.canvas, $rect$jscomp$1$$ = $canvas$jscomp$6$$.getBoundingClientRect();
  $adjustedX_pageX$jscomp$1$$ -= ("undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset) + $rect$jscomp$1$$.left;
  $adjustedY_pageY$jscomp$1$$ -= ("undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset) + $rect$jscomp$1$$.top;
  $adjustedX_pageX$jscomp$1$$ *= $canvas$jscomp$6$$.width / $rect$jscomp$1$$.width;
  $adjustedY_pageY$jscomp$1$$ *= $canvas$jscomp$6$$.height / $rect$jscomp$1$$.height;
  return {x:$adjustedX_pageX$jscomp$1$$, y:$adjustedY_pageY$jscomp$1$$};
}
function $Browser$setMouseCoords$$($pageX$jscomp$2$$, $pageY$jscomp$2$$) {
  const {x:$x$jscomp$95$$, y:$y$jscomp$79$$} = $Browser$calculateMouseCoords$$($pageX$jscomp$2$$, $pageY$jscomp$2$$);
  $Browser$mouseMovementX$$ = $x$jscomp$95$$ - $Browser$mouseX$$;
  $Browser$mouseMovementY$$ = $y$jscomp$79$$ - $Browser$mouseY$$;
  $Browser$mouseX$$ = $x$jscomp$95$$;
  $Browser$mouseY$$ = $y$jscomp$79$$;
}
function $Browser$calculateMouseEvent$$($event$jscomp$23_touch$$) {
  $Browser$pointerLock$$ ? ("mousemove" != $event$jscomp$23_touch$$.type && "mozMovementX" in $event$jscomp$23_touch$$ ? $Browser$mouseMovementX$$ = $Browser$mouseMovementY$$ = 0 : ($Browser$mouseMovementX$$ = $event$jscomp$23_touch$$.movementX || $event$jscomp$23_touch$$.mozMovementX || $event$jscomp$23_touch$$.webkitMovementX || 0, $Browser$mouseMovementY$$ = $event$jscomp$23_touch$$.movementY || $event$jscomp$23_touch$$.mozMovementY || $event$jscomp$23_touch$$.webkitMovementY || 0), $Browser$mouseX$$ += 
  $Browser$mouseMovementX$$, $Browser$mouseY$$ += $Browser$mouseMovementY$$) : "touchstart" === $event$jscomp$23_touch$$.type || "touchend" === $event$jscomp$23_touch$$.type || "touchmove" === $event$jscomp$23_touch$$.type ? ($event$jscomp$23_touch$$ = $event$jscomp$23_touch$$.$touch$, void 0 !== $event$jscomp$23_touch$$ && $Browser$calculateMouseCoords$$($event$jscomp$23_touch$$.pageX, $event$jscomp$23_touch$$.pageY)) : $Browser$setMouseCoords$$($event$jscomp$23_touch$$.pageX, $event$jscomp$23_touch$$.pageY);
}
var $Browser$resizeListeners$$ = [];
function $Browser$updateResizeListeners$$() {
  var $canvas$jscomp$7$$ = $Module$$.canvas;
  $Browser$resizeListeners$$.forEach($listener$jscomp$81$$ => $listener$jscomp$81$$($canvas$jscomp$7$$.width, $canvas$jscomp$7$$.height));
}
function $Browser$setCanvasSize$$($width$jscomp$35$$, $height$jscomp$30$$) {
  $Browser$updateCanvasDimensions$$($Module$$.canvas, $width$jscomp$35$$, $height$jscomp$30$$);
  $Browser$updateResizeListeners$$();
}
function $Browser$setFullscreenCanvasSize$$() {
  "undefined" != typeof SDL && ($HEAP32$$[SDL.screen >> 2] = $HEAPU32$$[SDL.screen >> 2] | 8388608);
  $Browser$updateCanvasDimensions$$($Module$$.canvas);
  $Browser$updateResizeListeners$$();
}
function $Browser$setWindowedCanvasSize$$() {
  "undefined" != typeof SDL && ($HEAP32$$[SDL.screen >> 2] = $HEAPU32$$[SDL.screen >> 2] & -8388609);
  $Browser$updateCanvasDimensions$$($Module$$.canvas);
  $Browser$updateResizeListeners$$();
}
function $Browser$updateCanvasDimensions$$($canvas$jscomp$9$$, $wNative$$, $hNative$$) {
  $wNative$$ && $hNative$$ ? ($canvas$jscomp$9$$.$widthNative$ = $wNative$$, $canvas$jscomp$9$$.$heightNative$ = $hNative$$) : ($wNative$$ = $canvas$jscomp$9$$.$widthNative$, $hNative$$ = $canvas$jscomp$9$$.$heightNative$);
  var $w$jscomp$14$$ = $wNative$$, $h$jscomp$10$$ = $hNative$$;
  0 < $Module$$.forcedAspectRatio && ($w$jscomp$14$$ / $h$jscomp$10$$ < $Module$$.forcedAspectRatio ? $w$jscomp$14$$ = Math.round($h$jscomp$10$$ * $Module$$.forcedAspectRatio) : $h$jscomp$10$$ = Math.round($w$jscomp$14$$ / $Module$$.forcedAspectRatio));
  if ($getFullscreenElement$$() === $canvas$jscomp$9$$.parentNode && "undefined" != typeof screen) {
    var $factor$jscomp$1$$ = Math.min(screen.width / $w$jscomp$14$$, screen.height / $h$jscomp$10$$);
    $w$jscomp$14$$ = Math.round($w$jscomp$14$$ * $factor$jscomp$1$$);
    $h$jscomp$10$$ = Math.round($h$jscomp$10$$ * $factor$jscomp$1$$);
  }
  $Browser$resizeCanvas$$ ? ($canvas$jscomp$9$$.width != $w$jscomp$14$$ && ($canvas$jscomp$9$$.width = $w$jscomp$14$$), $canvas$jscomp$9$$.height != $h$jscomp$10$$ && ($canvas$jscomp$9$$.height = $h$jscomp$10$$), "undefined" != typeof $canvas$jscomp$9$$.style && ($canvas$jscomp$9$$.style.removeProperty("width"), $canvas$jscomp$9$$.style.removeProperty("height"))) : ($canvas$jscomp$9$$.width != $wNative$$ && ($canvas$jscomp$9$$.width = $wNative$$), $canvas$jscomp$9$$.height != $hNative$$ && ($canvas$jscomp$9$$.height = 
  $hNative$$), "undefined" != typeof $canvas$jscomp$9$$.style && ($w$jscomp$14$$ != $wNative$$ || $h$jscomp$10$$ != $hNative$$ ? ($canvas$jscomp$9$$.style.setProperty("width", $w$jscomp$14$$ + "px", "important"), $canvas$jscomp$9$$.style.setProperty("height", $h$jscomp$10$$ + "px", "important")) : ($canvas$jscomp$9$$.style.removeProperty("width"), $canvas$jscomp$9$$.style.removeProperty("height"))));
}
var $Browser$$ = {}, $Browser$initted$$;
function $GLFW_Window$$($id$jscomp$22$$, $width$jscomp$36$$, $height$jscomp$31$$, $framebufferWidth$$, $framebufferHeight$$, $title$jscomp$12$$) {
  this.id = $id$jscomp$22$$;
  this.y = this.x = 0;
  this.$fullscreen$ = !1;
  this.$storedY$ = this.$storedX$ = 0;
  this.width = $width$jscomp$36$$;
  this.height = $height$jscomp$31$$;
  this.$framebufferWidth$ = $framebufferWidth$$;
  this.$framebufferHeight$ = $framebufferHeight$$;
  this.$storedWidth$ = $width$jscomp$36$$;
  this.$storedHeight$ = $height$jscomp$31$$;
  this.title = $title$jscomp$12$$;
  this.attributes = {...$GLFW$hints$$};
  this.buttons = 0;
  this.keys = [];
  this.$domKeys$ = [];
  this.title = null;
  this.$charFunc$ = this.$keyFunc$ = this.$dropFunc$ = this.$scrollFunc$ = this.$cursorEnterFunc$ = this.$cursorPosFunc$ = this.$mouseButtonFunc$ = this.$windowContentScaleFunc$ = this.$framebufferSizeFunc$ = this.$windowCloseFunc$ = this.$windowSizeFunc$ = 0;
}
var $GLFW$active$$ = null, $GLFW$scale$$ = null, $GLFW$windows$$ = null, $GLFW$devicePixelRatioMQL$$ = null, $GLFW$hints$$ = null, $GLFW$primaryTouchId$$ = null, $GLFW$defaultHints$$ = {131073:0, 131074:0, 131075:1, 131076:1, 131077:1, 131082:0, 135169:8, 135170:8, 135171:8, 135172:8, 135173:24, 135174:8, 135175:0, 135176:0, 135177:0, 135178:0, 135179:0, 135180:0, 135181:0, 135182:0, 135183:0, 139265:196609, 139266:1, 139267:0, 139268:0, 139269:0, 139270:0, 139271:0, 139272:0, 139276:0}, $GLFW$DOMToGLFWKeyCode$$ = 
$keycode$$ => {
  switch($keycode$$) {
    case 32:
      return 32;
    case 222:
      return 39;
    case 188:
      return 44;
    case 173:
      return 45;
    case 189:
      return 45;
    case 190:
      return 46;
    case 191:
      return 47;
    case 48:
      return 48;
    case 49:
      return 49;
    case 50:
      return 50;
    case 51:
      return 51;
    case 52:
      return 52;
    case 53:
      return 53;
    case 54:
      return 54;
    case 55:
      return 55;
    case 56:
      return 56;
    case 57:
      return 57;
    case 59:
      return 59;
    case 61:
      return 61;
    case 187:
      return 61;
    case 65:
      return 65;
    case 66:
      return 66;
    case 67:
      return 67;
    case 68:
      return 68;
    case 69:
      return 69;
    case 70:
      return 70;
    case 71:
      return 71;
    case 72:
      return 72;
    case 73:
      return 73;
    case 74:
      return 74;
    case 75:
      return 75;
    case 76:
      return 76;
    case 77:
      return 77;
    case 78:
      return 78;
    case 79:
      return 79;
    case 80:
      return 80;
    case 81:
      return 81;
    case 82:
      return 82;
    case 83:
      return 83;
    case 84:
      return 84;
    case 85:
      return 85;
    case 86:
      return 86;
    case 87:
      return 87;
    case 88:
      return 88;
    case 89:
      return 89;
    case 90:
      return 90;
    case 219:
      return 91;
    case 220:
      return 92;
    case 221:
      return 93;
    case 192:
      return 96;
    case 27:
      return 256;
    case 13:
      return 257;
    case 9:
      return 258;
    case 8:
      return 259;
    case 45:
      return 260;
    case 46:
      return 261;
    case 39:
      return 262;
    case 37:
      return 263;
    case 40:
      return 264;
    case 38:
      return 265;
    case 33:
      return 266;
    case 34:
      return 267;
    case 36:
      return 268;
    case 35:
      return 269;
    case 20:
      return 280;
    case 145:
      return 281;
    case 144:
      return 282;
    case 44:
      return 283;
    case 19:
      return 284;
    case 112:
      return 290;
    case 113:
      return 291;
    case 114:
      return 292;
    case 115:
      return 293;
    case 116:
      return 294;
    case 117:
      return 295;
    case 118:
      return 296;
    case 119:
      return 297;
    case 120:
      return 298;
    case 121:
      return 299;
    case 122:
      return 300;
    case 123:
      return 301;
    case 124:
      return 302;
    case 125:
      return 303;
    case 126:
      return 304;
    case 127:
      return 305;
    case 128:
      return 306;
    case 129:
      return 307;
    case 130:
      return 308;
    case 131:
      return 309;
    case 132:
      return 310;
    case 133:
      return 311;
    case 134:
      return 312;
    case 135:
      return 313;
    case 136:
      return 314;
    case 96:
      return 320;
    case 97:
      return 321;
    case 98:
      return 322;
    case 99:
      return 323;
    case 100:
      return 324;
    case 101:
      return 325;
    case 102:
      return 326;
    case 103:
      return 327;
    case 104:
      return 328;
    case 105:
      return 329;
    case 110:
      return 330;
    case 111:
      return 331;
    case 106:
      return 332;
    case 109:
      return 333;
    case 107:
      return 334;
    case 16:
      return 340;
    case 17:
      return 341;
    case 18:
      return 342;
    case 91:
      return 343;
    case 224:
      return 343;
    case 93:
      return 348;
    default:
      return -1;
  }
}, $GLFW$getModBits$$ = () => {
  var $win$$ = $GLFW$active$$, $mod$jscomp$1$$ = 0;
  $win$$.keys[340] && ($mod$jscomp$1$$ |= 1);
  $win$$.keys[341] && ($mod$jscomp$1$$ |= 2);
  $win$$.keys[342] && ($mod$jscomp$1$$ |= 4);
  if ($win$$.keys[343] || $win$$.keys[348]) {
    $mod$jscomp$1$$ |= 8;
  }
  return $mod$jscomp$1$$;
}, $GLFW$onKeyPress$$ = $charCode$jscomp$1_event$jscomp$24$$ => {
  $GLFW$active$$ && $GLFW$active$$.$charFunc$ && !$charCode$jscomp$1_event$jscomp$24$$.ctrlKey && !$charCode$jscomp$1_event$jscomp$24$$.metaKey && ($charCode$jscomp$1_event$jscomp$24$$ = $charCode$jscomp$1_event$jscomp$24$$.charCode, 0 == $charCode$jscomp$1_event$jscomp$24$$ || 0 <= $charCode$jscomp$1_event$jscomp$24$$ && 31 >= $charCode$jscomp$1_event$jscomp$24$$ || $wasmTable$$.get($GLFW$active$$.$charFunc$)($GLFW$active$$.id, $charCode$jscomp$1_event$jscomp$24$$));
}, $GLFW$onKeyChanged$$ = ($keyCode$$, $status$jscomp$4$$) => {
  if ($GLFW$active$$) {
    var $key$jscomp$42$$ = $GLFW$DOMToGLFWKeyCode$$($keyCode$$);
    if (-1 != $key$jscomp$42$$) {
      var $repeat$$ = $status$jscomp$4$$ && $GLFW$active$$.keys[$key$jscomp$42$$];
      $GLFW$active$$.keys[$key$jscomp$42$$] = $status$jscomp$4$$;
      $GLFW$active$$.$domKeys$[$keyCode$$] = $status$jscomp$4$$;
      $GLFW$active$$.$keyFunc$ && ($repeat$$ && ($status$jscomp$4$$ = 2), $wasmTable$$.get($GLFW$active$$.$keyFunc$)($GLFW$active$$.id, $key$jscomp$42$$, $keyCode$$, $status$jscomp$4$$, $GLFW$getModBits$$()));
    }
  }
}, $GLFW$onGamepadConnected$$ = () => {
  $GLFW$refreshJoysticks$$();
}, $GLFW$onGamepadDisconnected$$ = () => {
  $GLFW$refreshJoysticks$$();
}, $GLFW$onKeydown$$ = $event$jscomp$27$$ => {
  $GLFW$onKeyChanged$$($event$jscomp$27$$.keyCode, 1);
  "Backspace" != $event$jscomp$27$$.key && "Tab" != $event$jscomp$27$$.key || $event$jscomp$27$$.preventDefault();
}, $GLFW$onKeyup$$ = $event$jscomp$28$$ => {
  $GLFW$onKeyChanged$$($event$jscomp$28$$.keyCode, 0);
}, $GLFW$onBlur$$ = () => {
  if ($GLFW$active$$) {
    for (var $i$jscomp$52$$ = 0; $i$jscomp$52$$ < $GLFW$active$$.$domKeys$.length; ++$i$jscomp$52$$) {
      $GLFW$active$$.$domKeys$[$i$jscomp$52$$] && $GLFW$onKeyChanged$$($i$jscomp$52$$, 0);
    }
  }
}, $GLFW$onMousemove$$ = $event$jscomp$30$$ => {
  if ($GLFW$active$$) {
    if ("touchmove" === $event$jscomp$30$$.type) {
      $event$jscomp$30$$.preventDefault();
      let $primaryChanged$$ = !1;
      for (let $i$jscomp$53$$ of $event$jscomp$30$$.changedTouches) {
        if ($GLFW$primaryTouchId$$ === $i$jscomp$53$$.identifier) {
          $Browser$setMouseCoords$$($i$jscomp$53$$.pageX, $i$jscomp$53$$.pageY);
          $primaryChanged$$ = !0;
          break;
        }
      }
      if (!$primaryChanged$$) {
        return;
      }
    } else {
      $Browser$calculateMouseEvent$$($event$jscomp$30$$);
    }
    $event$jscomp$30$$.target == $Module$$.canvas && $GLFW$active$$.$cursorPosFunc$ && $GLFW$active$$.$cursorPosFunc$ && $wasmTable$$.get($GLFW$active$$.$cursorPosFunc$)($GLFW$active$$.id, $Browser$mouseX$$, $Browser$mouseY$$);
  }
}, $GLFW$onMouseenter$$ = $event$jscomp$32$$ => {
  $GLFW$active$$ && $event$jscomp$32$$.target == $Module$$.canvas && $GLFW$active$$.$cursorEnterFunc$ && $wasmTable$$.get($GLFW$active$$.$cursorEnterFunc$)($GLFW$active$$.id, 1);
}, $GLFW$onMouseleave$$ = $event$jscomp$33$$ => {
  $GLFW$active$$ && $event$jscomp$33$$.target == $Module$$.canvas && $GLFW$active$$.$cursorEnterFunc$ && $wasmTable$$.get($GLFW$active$$.$cursorEnterFunc$)($GLFW$active$$.id, 0);
}, $GLFW$onMouseButtonChanged$$ = ($event$jscomp$34$$, $status$jscomp$5$$) => {
  if ($GLFW$active$$ && $event$jscomp$34$$.target == $Module$$.canvas) {
    var $eventButton$jscomp$1_eventButton$jscomp$inline_143$$ = 0;
    if ("touchstart" === $event$jscomp$34$$.type || "touchend" === $event$jscomp$34$$.type || "touchcancel" === $event$jscomp$34$$.type) {
      $event$jscomp$34$$.preventDefault();
      var $chosenTouch_primaryChanged$jscomp$1$$ = !1;
      if (null === $GLFW$primaryTouchId$$ && "touchstart" === $event$jscomp$34$$.type && 0 < $event$jscomp$34$$.targetTouches.length) {
        $chosenTouch_primaryChanged$jscomp$1$$ = $event$jscomp$34$$.targetTouches[0], $GLFW$primaryTouchId$$ = $chosenTouch_primaryChanged$jscomp$1$$.identifier, $Browser$setMouseCoords$$($chosenTouch_primaryChanged$jscomp$1$$.pageX, $chosenTouch_primaryChanged$jscomp$1$$.pageY), $chosenTouch_primaryChanged$jscomp$1$$ = !0;
      } else if ("touchend" === $event$jscomp$34$$.type || "touchcancel" === $event$jscomp$34$$.type) {
        for (let $i$jscomp$54$$ of $event$jscomp$34$$.changedTouches) {
          if ($GLFW$primaryTouchId$$ === $i$jscomp$54$$.identifier) {
            $GLFW$primaryTouchId$$ = null;
            $chosenTouch_primaryChanged$jscomp$1$$ = !0;
            break;
          }
        }
      }
      if (!$chosenTouch_primaryChanged$jscomp$1$$) {
        return;
      }
    } else {
      $Browser$calculateMouseEvent$$($event$jscomp$34$$), $eventButton$jscomp$1_eventButton$jscomp$inline_143$$ = $event$jscomp$34$$.button, 0 < $eventButton$jscomp$1_eventButton$jscomp$inline_143$$ && ($eventButton$jscomp$1_eventButton$jscomp$inline_143$$ = 1 == $eventButton$jscomp$1_eventButton$jscomp$inline_143$$ ? 2 : 1);
    }
    if (1 == $status$jscomp$5$$) {
      $GLFW$active$$.buttons |= 1 << $eventButton$jscomp$1_eventButton$jscomp$inline_143$$;
      try {
        $event$jscomp$34$$.target.setCapture();
      } catch ($e$jscomp$42$$) {
      }
    } else {
      $GLFW$active$$.buttons &= ~(1 << $eventButton$jscomp$1_eventButton$jscomp$inline_143$$);
    }
    $GLFW$active$$.$mouseButtonFunc$ && $wasmTable$$.get($GLFW$active$$.$mouseButtonFunc$)($GLFW$active$$.id, $eventButton$jscomp$1_eventButton$jscomp$inline_143$$, $status$jscomp$5$$, $GLFW$getModBits$$());
  }
}, $GLFW$onMouseButtonDown$$ = $event$jscomp$35$$ => {
  $GLFW$active$$ && $GLFW$onMouseButtonChanged$$($event$jscomp$35$$, 1);
}, $GLFW$onMouseButtonUp$$ = $event$jscomp$36$$ => {
  $GLFW$active$$ && $GLFW$onMouseButtonChanged$$($event$jscomp$36$$, 0);
}, $GLFW$onMouseWheel$$ = $event$jscomp$37$$ => {
  switch($event$jscomp$37$$.type) {
    case "DOMMouseScroll":
      var $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = $event$jscomp$37$$.detail / 3;
      break;
    case "mousewheel":
      $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = $event$jscomp$37$$.wheelDelta / 120;
      break;
    case "wheel":
      $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = $event$jscomp$37$$.deltaY;
      switch($event$jscomp$37$$.deltaMode) {
        case 0:
          $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ /= 100;
          break;
        case 1:
          $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ /= 3;
          break;
        case 2:
          $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ *= 80;
          break;
        default:
          throw "unrecognized mouse wheel delta mode: " + $event$jscomp$37$$.deltaMode;
      }break;
    default:
      throw "unrecognized mouse wheel event: " + $event$jscomp$37$$.type;
  }
  $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = -$delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$;
  $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = 0 == $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ ? 0 : 0 < $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ ? Math.max($delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$, 1) : Math.min($delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$, -1);
  if ($GLFW$active$$ && $GLFW$active$$.$scrollFunc$ && $event$jscomp$37$$.target == $Module$$.canvas) {
    var $sy$jscomp$5$$ = $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$;
    $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$ = "mousewheel" == $event$jscomp$37$$.type ? $event$jscomp$37$$.wheelDeltaX : $event$jscomp$37$$.deltaX;
    $wasmTable$$.get($GLFW$active$$.$scrollFunc$)($GLFW$active$$.id, $delta$jscomp$4_delta$jscomp$inline_146_sx$jscomp$4$$, $sy$jscomp$5$$);
    $event$jscomp$37$$.preventDefault();
  }
}, $GLFW$onCanvasResize$$ = ($width$jscomp$37$$, $height$jscomp$32$$, $framebufferWidth$jscomp$1$$, $framebufferHeight$jscomp$1$$) => {
  if ($GLFW$active$$) {
    var $resizeNeeded$$ = !1;
    $getFullscreenElement$$() ? $GLFW$active$$.$fullscreen$ || ($resizeNeeded$$ = $width$jscomp$37$$ != screen.width || $height$jscomp$32$$ != screen.height, $GLFW$active$$.$storedX$ = $GLFW$active$$.x, $GLFW$active$$.$storedY$ = $GLFW$active$$.y, $GLFW$active$$.$storedWidth$ = $GLFW$active$$.width, $GLFW$active$$.$storedHeight$ = $GLFW$active$$.height, $GLFW$active$$.x = $GLFW$active$$.y = 0, $GLFW$active$$.width = screen.width, $GLFW$active$$.height = screen.height, $GLFW$active$$.$fullscreen$ = 
    !0) : 1 == $GLFW$active$$.$fullscreen$ && ($resizeNeeded$$ = $width$jscomp$37$$ != $GLFW$active$$.$storedWidth$ || $height$jscomp$32$$ != $GLFW$active$$.$storedHeight$, $GLFW$active$$.x = $GLFW$active$$.$storedX$, $GLFW$active$$.y = $GLFW$active$$.$storedY$, $GLFW$active$$.width = $GLFW$active$$.$storedWidth$, $GLFW$active$$.height = $GLFW$active$$.$storedHeight$, $GLFW$active$$.$fullscreen$ = !1);
    if ($resizeNeeded$$) {
      $Browser$setCanvasSize$$($GLFW$active$$.width, $GLFW$active$$.height);
    } else if ($GLFW$active$$.width != $width$jscomp$37$$ || $GLFW$active$$.height != $height$jscomp$32$$ || $GLFW$active$$.$framebufferWidth$ != $framebufferWidth$jscomp$1$$ || $GLFW$active$$.$framebufferHeight$ != $framebufferHeight$jscomp$1$$) {
      $GLFW$active$$.width = $width$jscomp$37$$, $GLFW$active$$.height = $height$jscomp$32$$, $GLFW$active$$.$framebufferWidth$ = $framebufferWidth$jscomp$1$$, $GLFW$active$$.$framebufferHeight$ = $framebufferHeight$jscomp$1$$, $GLFW$active$$ && $GLFW$active$$.$windowSizeFunc$ && $wasmTable$$.get($GLFW$active$$.$windowSizeFunc$)($GLFW$active$$.id, $GLFW$active$$.width, $GLFW$active$$.height), $GLFW$active$$ && $GLFW$active$$.$framebufferSizeFunc$ && $wasmTable$$.get($GLFW$active$$.$framebufferSizeFunc$)($GLFW$active$$.id, 
      $GLFW$active$$.$framebufferWidth$, $GLFW$active$$.$framebufferHeight$);
    }
  }
}, $GLFW$joys$$ = {}, $GLFW$lastGamepadState$$ = [], $GLFW$lastGamepadStateFrame$$ = null, $GLFW$refreshJoysticks$$ = () => {
  if ($MainLoop$currentFrameNumber$$ !== $GLFW$lastGamepadStateFrame$$ || !$MainLoop$currentFrameNumber$$) {
    $GLFW$lastGamepadState$$ = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads || [];
    $GLFW$lastGamepadStateFrame$$ = $MainLoop$currentFrameNumber$$;
    for (var $joy$$ = 0; $joy$$ < $GLFW$lastGamepadState$$.length; ++$joy$$) {
      var $gamepad$$ = $GLFW$lastGamepadState$$[$joy$$];
      if ($gamepad$$) {
        $GLFW$joys$$[$joy$$] || ($out$$("glfw joystick connected:", $joy$$), $GLFW$joys$$[$joy$$] = {id:$stringToNewUTF8$$($gamepad$$.id), $buttonsCount$:$gamepad$$.buttons.length, $axesCount$:$gamepad$$.axes.length, buttons:$_malloc$$($gamepad$$.buttons.length), axes:$_malloc$$(4 * $gamepad$$.axes.length)});
        for (var $data$jscomp$98$$ = $GLFW$joys$$[$joy$$], $i$jscomp$55$$ = 0; $i$jscomp$55$$ < $gamepad$$.buttons.length; ++$i$jscomp$55$$) {
          $HEAP8$$[$data$jscomp$98$$.buttons + $i$jscomp$55$$] = $gamepad$$.buttons[$i$jscomp$55$$].pressed;
        }
        for ($i$jscomp$55$$ = 0; $i$jscomp$55$$ < $gamepad$$.axes.length; ++$i$jscomp$55$$) {
          $HEAPF32$$[$data$jscomp$98$$.axes + 4 * $i$jscomp$55$$ >> 2] = $gamepad$$.axes[$i$jscomp$55$$];
        }
      } else {
        $GLFW$joys$$[$joy$$] && ($out$$("glfw joystick disconnected", $joy$$), $_free$$($GLFW$joys$$[$joy$$].id), $_free$$($GLFW$joys$$[$joy$$].buttons), $_free$$($GLFW$joys$$[$joy$$].axes), delete $GLFW$joys$$[$joy$$]);
      }
    }
  }
}, $GLFW$onDrop$$ = $event$jscomp$38$$ => {
  function $save$$($file$jscomp$2$$) {
    var $path$jscomp$77$$ = "/.glfw_dropped_files/" + $file$jscomp$2$$.name.replace(/\//g, "_"), $reader$jscomp$1$$ = new FileReader();
    $reader$jscomp$1$$.onloadend = $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ => {
      if (2 != $reader$jscomp$1$$.readyState) {
        ++$written$$, $out$$("failed to read dropped file: " + $file$jscomp$2$$.name + ": " + $reader$jscomp$1$$.error);
      } else {
        $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ = new Uint8Array($data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$.target.result);
        var $opts$jscomp$inline_152$$ = {};
        $opts$jscomp$inline_152$$.flags = $opts$jscomp$inline_152$$.flags || 577;
        var $stream$jscomp$inline_153$$ = $FS$open$$($path$jscomp$77$$, $opts$jscomp$inline_152$$.flags, $opts$jscomp$inline_152$$.mode);
        "string" == typeof $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ && ($data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ = new Uint8Array($intArrayFromString$$($data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$)));
        if (ArrayBuffer.isView($data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$)) {
          $FS$write$$($stream$jscomp$inline_153$$, $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$, 0, $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$.byteLength, void 0, $opts$jscomp$inline_152$$.$canOwn$);
        } else {
          throw Error("Unsupported data type");
        }
        $FS$close$$($stream$jscomp$inline_153$$);
        if (++$written$$ === $count$jscomp$49$$) {
          $wasmTable$$.get($GLFW$active$$.$dropFunc$)($GLFW$active$$.id, $count$jscomp$49$$, $filenames$$);
          for ($data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ = 0; $data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$ < $filenamesArray$$.length; ++$data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$) {
            $_free$$($filenamesArray$$[$data$jscomp$inline_151_e$jscomp$43_i$jscomp$57$$]);
          }
          $_free$$($filenames$$);
        }
      }
    };
    $reader$jscomp$1$$.readAsArrayBuffer($file$jscomp$2$$);
    var $filename$jscomp$20$$ = $stringToNewUTF8$$($path$jscomp$77$$);
    $filenamesArray$$.push($filename$jscomp$20$$);
    $HEAPU32$$[$filenames$$ + 4 * $i$jscomp$56$$ >> 2] = $filename$jscomp$20$$;
  }
  if ($GLFW$active$$ && $GLFW$active$$.$dropFunc$ && $event$jscomp$38$$.dataTransfer && $event$jscomp$38$$.dataTransfer.files && 0 != $event$jscomp$38$$.dataTransfer.files.length) {
    $event$jscomp$38$$.preventDefault();
    var $filenames$$ = $_malloc$$(4 * $event$jscomp$38$$.dataTransfer.files.length), $filenamesArray$$ = [], $count$jscomp$49$$ = $event$jscomp$38$$.dataTransfer.files.length, $written$$ = 0;
    $FS$createPath$$("/", ".glfw_dropped_files");
    for (var $i$jscomp$56$$ = 0; $i$jscomp$56$$ < $count$jscomp$49$$; ++$i$jscomp$56$$) {
      $save$$($event$jscomp$38$$.dataTransfer.files[$i$jscomp$56$$]);
    }
    return !1;
  }
}, $GLFW$onDragover$$ = $event$jscomp$39$$ => {
  if ($GLFW$active$$ && $GLFW$active$$.$dropFunc$) {
    return $event$jscomp$39$$.preventDefault(), !1;
  }
};
function $GLFW$requestFullscreen$$($lockPointer$jscomp$1$$, $resizeCanvas$jscomp$1$$) {
  function $fullscreenChange$jscomp$1$$() {
    $Browser$isFullscreen$$ = !1;
    var $canvasContainer$jscomp$3$$ = $canvas$jscomp$13$$.parentNode;
    $getFullscreenElement$$() === $canvasContainer$jscomp$3$$ ? ($canvas$jscomp$13$$.exitFullscreen = $Browser$exitFullscreen$$, $Browser$lockPointer$$ && $canvas$jscomp$13$$.requestPointerLock(), $Browser$isFullscreen$$ = !0, $Browser$resizeCanvas$$ ? $Browser$setFullscreenCanvasSize$$() : ($Browser$updateCanvasDimensions$$($canvas$jscomp$13$$), $Browser$updateResizeListeners$$())) : ($canvasContainer$jscomp$3$$.parentNode.insertBefore($canvas$jscomp$13$$, $canvasContainer$jscomp$3$$), $canvasContainer$jscomp$3$$.parentNode.removeChild($canvasContainer$jscomp$3$$), 
    $Browser$resizeCanvas$$ ? $Browser$setWindowedCanvasSize$$() : ($Browser$updateCanvasDimensions$$($canvas$jscomp$13$$), $Browser$updateResizeListeners$$()));
    $Module$$.onFullScreen?.($Browser$isFullscreen$$);
    $Module$$.onFullscreen?.($Browser$isFullscreen$$);
  }
  $Browser$lockPointer$$ = $lockPointer$jscomp$1$$;
  $Browser$resizeCanvas$$ = $resizeCanvas$jscomp$1$$;
  "undefined" == typeof $Browser$lockPointer$$ && ($Browser$lockPointer$$ = !0);
  "undefined" == typeof $Browser$resizeCanvas$$ && ($Browser$resizeCanvas$$ = !1);
  var $canvas$jscomp$13$$ = $Module$$.canvas;
  $Browser$fullscreenHandlersInstalled$$ || ($Browser$fullscreenHandlersInstalled$$ = !0, document.addEventListener("fullscreenchange", $fullscreenChange$jscomp$1$$, !1), document.addEventListener("mozfullscreenchange", $fullscreenChange$jscomp$1$$, !1), document.addEventListener("webkitfullscreenchange", $fullscreenChange$jscomp$1$$, !1), document.addEventListener("MSFullscreenChange", $fullscreenChange$jscomp$1$$, !1));
  var $canvasContainer$jscomp$2$$ = document.createElement("div");
  $canvas$jscomp$13$$.parentNode.insertBefore($canvasContainer$jscomp$2$$, $canvas$jscomp$13$$);
  $canvasContainer$jscomp$2$$.appendChild($canvas$jscomp$13$$);
  $canvasContainer$jscomp$2$$.requestFullscreen = $canvasContainer$jscomp$2$$.requestFullscreen || $canvasContainer$jscomp$2$$.mozRequestFullScreen || $canvasContainer$jscomp$2$$.msRequestFullscreen || ($canvasContainer$jscomp$2$$.webkitRequestFullscreen ? () => $canvasContainer$jscomp$2$$.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || ($canvasContainer$jscomp$2$$.webkitRequestFullScreen ? () => $canvasContainer$jscomp$2$$.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : 
  null);
  $canvasContainer$jscomp$2$$.requestFullscreen();
}
function $GLFW$updateCanvasDimensions$$($canvas$jscomp$14$$, $wNative$jscomp$1$$, $hNative$jscomp$1$$) {
  var $hNativeScaled_scale$jscomp$5$$ = $GLFW$isHiDPIAware$$() ? $GLFW$scale$$ : 1.0;
  $wNative$jscomp$1$$ && $hNative$jscomp$1$$ ? ($canvas$jscomp$14$$.$widthNative$ = $wNative$jscomp$1$$, $canvas$jscomp$14$$.$heightNative$ = $hNative$jscomp$1$$) : ($wNative$jscomp$1$$ = $canvas$jscomp$14$$.$widthNative$, $hNative$jscomp$1$$ = $canvas$jscomp$14$$.$heightNative$);
  var $w$jscomp$15_wNativeScaled$$ = $wNative$jscomp$1$$, $h$jscomp$11$$ = $hNative$jscomp$1$$;
  $Module$$.forcedAspectRatio && 0 < $Module$$.forcedAspectRatio && ($w$jscomp$15_wNativeScaled$$ / $h$jscomp$11$$ < $Module$$.forcedAspectRatio ? $w$jscomp$15_wNativeScaled$$ = Math.round($h$jscomp$11$$ * $Module$$.forcedAspectRatio) : $h$jscomp$11$$ = Math.round($w$jscomp$15_wNativeScaled$$ / $Module$$.forcedAspectRatio));
  if ($getFullscreenElement$$() === $canvas$jscomp$14$$.parentNode && "undefined" != typeof screen) {
    var $factor$jscomp$2$$ = Math.min(screen.width / $w$jscomp$15_wNativeScaled$$, screen.height / $h$jscomp$11$$);
    $w$jscomp$15_wNativeScaled$$ = Math.round($w$jscomp$15_wNativeScaled$$ * $factor$jscomp$2$$);
    $h$jscomp$11$$ = Math.round($h$jscomp$11$$ * $factor$jscomp$2$$);
  }
  $Browser$resizeCanvas$$ && ($wNative$jscomp$1$$ = $w$jscomp$15_wNativeScaled$$, $hNative$jscomp$1$$ = $h$jscomp$11$$);
  $w$jscomp$15_wNativeScaled$$ = Math.floor($wNative$jscomp$1$$ * $hNativeScaled_scale$jscomp$5$$);
  $hNativeScaled_scale$jscomp$5$$ = Math.floor($hNative$jscomp$1$$ * $hNativeScaled_scale$jscomp$5$$);
  $canvas$jscomp$14$$.width != $w$jscomp$15_wNativeScaled$$ && ($canvas$jscomp$14$$.width = $w$jscomp$15_wNativeScaled$$);
  $canvas$jscomp$14$$.height != $hNativeScaled_scale$jscomp$5$$ && ($canvas$jscomp$14$$.height = $hNativeScaled_scale$jscomp$5$$);
  "undefined" != typeof $canvas$jscomp$14$$.style && ($GLFW$isHiDPIAware$$() ? ($canvas$jscomp$14$$.style.setProperty("width", $wNative$jscomp$1$$ + "px", "important"), $canvas$jscomp$14$$.style.setProperty("height", $hNative$jscomp$1$$ + "px", "important")) : ($canvas$jscomp$14$$.style.removeProperty("width"), $canvas$jscomp$14$$.style.removeProperty("height")));
}
function $GLFW$calculateMouseCoords$$($adjustedX$jscomp$1_pageX$jscomp$3$$, $adjustedY$jscomp$1_pageY$jscomp$3$$) {
  const $rect$jscomp$2$$ = $Module$$.canvas.getBoundingClientRect();
  $adjustedX$jscomp$1_pageX$jscomp$3$$ -= ("undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset) + $rect$jscomp$2$$.left;
  $adjustedY$jscomp$1_pageY$jscomp$3$$ -= ("undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset) + $rect$jscomp$2$$.top;
  !$GLFW$isHiDPIAware$$() && $GLFW$active$$ && ($adjustedX$jscomp$1_pageX$jscomp$3$$ *= $GLFW$active$$.width / $rect$jscomp$2$$.width, $adjustedY$jscomp$1_pageY$jscomp$3$$ *= $GLFW$active$$.height / $rect$jscomp$2$$.height);
  return {x:$adjustedX$jscomp$1_pageX$jscomp$3$$, y:$adjustedY$jscomp$1_pageY$jscomp$3$$};
}
function $GLFW$getDevicePixelRatio$$() {
  return "number" == typeof devicePixelRatio && devicePixelRatio || 1.0;
}
function $GLFW$isHiDPIAware$$() {
  return $GLFW$active$$ ? 0 < $GLFW$active$$.attributes[139276] : !1;
}
function $GLFW$adjustCanvasDimensions$$() {
  $GLFW$active$$ && ($Browser$updateCanvasDimensions$$($Module$$.canvas, $GLFW$active$$.width, $GLFW$active$$.height), $Browser$updateResizeListeners$$());
}
function $GLFW$onDevicePixelRatioChange$$() {
  $GLFW$scale$$ = $GLFW$getDevicePixelRatio$$();
  $GLFW$active$$ && $GLFW$active$$.$windowContentScaleFunc$ && $wasmTable$$.get($GLFW$active$$.$windowContentScaleFunc$)($GLFW$active$$.id, $GLFW$scale$$, $GLFW$scale$$);
  $GLFW$adjustCanvasDimensions$$();
}
$FS$nameTable$$ = Array(4096);
$FS$mount$$($MEMFS$$, "/");
$FS$mkdir$$("/tmp");
$FS$mkdir$$("/home");
$FS$mkdir$$("/home/web_user");
(function() {
  $FS$mkdir$$("/dev");
  $FS$registerDevice$$(259, {read:() => 0, write:($stream$jscomp$40$$, $buffer$jscomp$35$$, $offset$jscomp$78$$, $length$jscomp$38$$) => $length$jscomp$38$$, $llseek$:() => 0});
  $FS$mkdev$$("/dev/null", 259);
  $TTY$register$$(1280, $TTY$default_tty_ops$$);
  $TTY$register$$(1536, $TTY$default_tty1_ops$$);
  $FS$mkdev$$("/dev/tty", 1280);
  $FS$mkdev$$("/dev/tty1", 1536);
  var $randomBuffer$$ = new Uint8Array(1024), $randomLeft$$ = 0, $randomByte$$ = () => {
    0 === $randomLeft$$ && ($randomFill$$($randomBuffer$$), $randomLeft$$ = $randomBuffer$$.byteLength);
    return $randomBuffer$$[--$randomLeft$$];
  };
  $FS$createDevice$$("/dev", "random", $randomByte$$);
  $FS$createDevice$$("/dev", "urandom", $randomByte$$);
  $FS$mkdir$$("/dev/shm");
  $FS$mkdir$$("/dev/shm/tmp");
})();
(function() {
  $FS$mkdir$$("/proc");
  var $proc_self$$ = $FS$mkdir$$("/proc/self");
  $FS$mkdir$$("/proc/self/fd");
  $FS$mount$$({$mount$() {
    var $node$jscomp$45$$ = $FS$createNode$$($proc_self$$, "fd", 16895, 73);
    $node$jscomp$45$$.$stream_ops$ = {$llseek$:$MEMFS$$.$stream_ops$.$llseek$};
    $node$jscomp$45$$.$node_ops$ = {lookup($fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$, $name$jscomp$98$$) {
      $fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$ = +$name$jscomp$98$$;
      var $stream$jscomp$41$$ = $FS$getStreamChecked$$($fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$);
      $fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$ = {parent:null, $mount$:{$mountpoint$:"fake"}, $node_ops$:{readlink:() => $stream$jscomp$41$$.path}, id:$fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$ + 1};
      return $fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$.parent = $fd$jscomp$31_parent$jscomp$20_ret$jscomp$2$$;
    }, readdir() {
      return Array.from($FS$streams$$.entries()).filter(([, $v$jscomp$1$$]) => $v$jscomp$1$$).map(([$k$jscomp$1$$]) => $k$jscomp$1$$.toString());
    }};
    return $node$jscomp$45$$;
  }}, "/proc/self/fd");
})();
$Module$$.requestAnimationFrame = $MainLoop$requestAnimationFrame$$;
$Module$$.pauseMainLoop = $MainLoop$pause$$;
$Module$$.resumeMainLoop = $MainLoop$resume$$;
$Module$$.preMainLoop && $MainLoop$preMainLoop$$.push($Module$$.preMainLoop);
$Module$$.postMainLoop && $MainLoop$postMainLoop$$.push($Module$$.postMainLoop);
for (let $i$jscomp$59$$ = 0; 32 > $i$jscomp$59$$; ++$i$jscomp$59$$) {
  $tempFixedLengthArray$$.push(Array($i$jscomp$59$$));
}
for (var $miniTempWebGLFloatBuffersStorage$$ = new Float32Array(288), $i$$ = 0; 288 >= $i$$; ++$i$$) {
  $miniTempWebGLFloatBuffers$$[$i$$] = $miniTempWebGLFloatBuffersStorage$$.subarray(0, $i$$);
}
$Module$$.noExitRuntime && ($noExitRuntime$$ = $Module$$.noExitRuntime);
$Module$$.preloadPlugins && ($preloadPlugins$$ = $Module$$.preloadPlugins);
$Module$$.print && ($out$$ = $Module$$.print);
$Module$$.printErr && ($err$$ = $Module$$.printErr);
$Module$$.wasmBinary && ($wasmBinary$$ = $Module$$.wasmBinary);
$Module$$.thisProgram && ($thisProgram$$ = $Module$$.thisProgram);
$Module$$.addRunDependency = $addRunDependency$$;
$Module$$.removeRunDependency = $removeRunDependency$$;
$Module$$.FS_preloadFile = async($parent$jscomp$10$$, $name$jscomp$86$$, $url$jscomp$29$$, $canRead$jscomp$1$$, $canWrite$jscomp$1$$, $dontCreateFile$$, $canOwn$jscomp$1$$, $preFinish$$) => {
  var $fullname$jscomp$1$$ = $name$jscomp$86$$ ? $PATH_FS$resolve$$($PATH$normalize$$($parent$jscomp$10$$ + "/" + $name$jscomp$86$$)) : $parent$jscomp$10$$, $dep$$ = `cp ${$fullname$jscomp$1$$}`;
  $addRunDependency$$($dep$$);
  try {
    var $byteArray$jscomp$4$$ = $url$jscomp$29$$;
    "string" == typeof $url$jscomp$29$$ && ($byteArray$jscomp$4$$ = await $asyncLoad$$($url$jscomp$29$$));
    $byteArray$jscomp$4$$ = await $FS_handledByPreloadPlugin$$($byteArray$jscomp$4$$, $fullname$jscomp$1$$);
    $preFinish$$?.();
    $dontCreateFile$$ || $FS$createDataFile$$($parent$jscomp$10$$, $name$jscomp$86$$, $byteArray$jscomp$4$$, $canRead$jscomp$1$$, $canWrite$jscomp$1$$, $canOwn$jscomp$1$$);
  } finally {
    $removeRunDependency$$($dep$$);
  }
};
$Module$$.FS_unlink = (...$args$jscomp$10$$) => $FS$unlink$$(...$args$jscomp$10$$);
$Module$$.FS_createPath = (...$args$jscomp$9$$) => $FS$createPath$$(...$args$jscomp$9$$);
$Module$$.FS_createDevice = (...$args$jscomp$12$$) => $FS$createDevice$$(...$args$jscomp$12$$);
$Module$$.FS_createDataFile = (...$args$jscomp$7$$) => $FS$createDataFile$$(...$args$jscomp$7$$);
$Module$$.FS_createLazyFile = (...$args$jscomp$11$$) => $FS$createLazyFile$$(...$args$jscomp$11$$);
var $_main$$, $_free$$, $_malloc$$, $_setThrew$$, $__emscripten_stack_restore$$, $_emscripten_stack_get_current$$, $wasmImports$$ = {__assert_fail:($condition$jscomp$3$$, $filename$jscomp$18$$, $line$jscomp$7$$, $func$jscomp$7$$) => $abort$$(`Assertion failed: ${$UTF8ToString$$($condition$jscomp$3$$)}, at: ` + [$filename$jscomp$18$$ ? $UTF8ToString$$($filename$jscomp$18$$) : "unknown filename", $line$jscomp$7$$, $func$jscomp$7$$ ? $UTF8ToString$$($func$jscomp$7$$) : "unknown function"]), __cxa_throw:($ptr$jscomp$3$$, 
$type$jscomp$174$$, $destructor$jscomp$2$$) => {
  var $JSCompiler_StaticMethods_init$self$jscomp$inline_159$$ = new $ExceptionInfo$$($ptr$jscomp$3$$);
  $HEAPU32$$[$JSCompiler_StaticMethods_init$self$jscomp$inline_159$$.$ptr$ + 16 >> 2] = 0;
  $HEAPU32$$[$JSCompiler_StaticMethods_init$self$jscomp$inline_159$$.$ptr$ + 4 >> 2] = $type$jscomp$174$$;
  $HEAPU32$$[$JSCompiler_StaticMethods_init$self$jscomp$inline_159$$.$ptr$ + 8 >> 2] = $destructor$jscomp$2$$;
  $exceptionLast$$ = $ptr$jscomp$3$$;
  $uncaughtExceptionCount$$++;
  throw $exceptionLast$$;
}, __syscall_dup3:function($fd$jscomp$33$$, $newfd$$) {
  try {
    var $old$$ = $FS$getStreamChecked$$($fd$jscomp$33$$);
    if ($old$$.fd === $newfd$$) {
      return -28;
    }
    if (0 > $newfd$$ || 4096 <= $newfd$$) {
      return -8;
    }
    var $existing$$ = $FS$streams$$[$newfd$$];
    $existing$$ && $FS$close$$($existing$$);
    return $FS$dupStream$$($old$$, $newfd$$).fd;
  } catch ($e$jscomp$26$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$26$$.name) {
      throw $e$jscomp$26$$;
    }
    return -$e$jscomp$26$$.$errno$;
  }
}, __syscall_fcntl64:function($fd$jscomp$34$$, $cmd$jscomp$1$$, $varargs$$) {
  $SYSCALLS$varargs$$ = $varargs$$;
  try {
    var $stream$jscomp$53$$ = $FS$getStreamChecked$$($fd$jscomp$34$$);
    switch($cmd$jscomp$1$$) {
      case 0:
        var $arg$jscomp$11$$ = $syscallGetVarargI$$();
        if (0 > $arg$jscomp$11$$) {
          break;
        }
        for (; $FS$streams$$[$arg$jscomp$11$$];) {
          $arg$jscomp$11$$++;
        }
        return $FS$dupStream$$($stream$jscomp$53$$, $arg$jscomp$11$$).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return $stream$jscomp$53$$.flags;
      case 4:
        return $arg$jscomp$11$$ = $syscallGetVarargI$$(), $stream$jscomp$53$$.flags |= $arg$jscomp$11$$, 0;
      case 12:
        return $arg$jscomp$11$$ = $syscallGetVarargI$$(), $HEAP16$$[$arg$jscomp$11$$ + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch ($e$jscomp$27$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$27$$.name) {
      throw $e$jscomp$27$$;
    }
    return -$e$jscomp$27$$.$errno$;
  }
}, __syscall_ftruncate64:function($fd$jscomp$35$$, $len$jscomp$inline_164_length$jscomp$44$$) {
  $len$jscomp$inline_164_length$jscomp$44$$ = -9007199254740992 > $len$jscomp$inline_164_length$jscomp$44$$ || 9007199254740992 < $len$jscomp$inline_164_length$jscomp$44$$ ? NaN : Number($len$jscomp$inline_164_length$jscomp$44$$);
  try {
    if (isNaN($len$jscomp$inline_164_length$jscomp$44$$)) {
      return -61;
    }
    var $stream$jscomp$inline_165$$ = $FS$getStreamChecked$$($fd$jscomp$35$$);
    if (0 > $len$jscomp$inline_164_length$jscomp$44$$ || 0 === ($stream$jscomp$inline_165$$.flags & 2097155)) {
      throw new $FS$ErrnoError$$(28);
    }
    $FS$doTruncate$$($stream$jscomp$inline_165$$, $stream$jscomp$inline_165$$.node, $len$jscomp$inline_164_length$jscomp$44$$);
    return 0;
  } catch ($e$jscomp$28$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$28$$.name) {
      throw $e$jscomp$28$$;
    }
    return -$e$jscomp$28$$.$errno$;
  }
}, __syscall_ioctl:function($JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$, $op$jscomp$1$$, $varargs$jscomp$1$$) {
  $SYSCALLS$varargs$$ = $varargs$jscomp$1$$;
  try {
    var $stream$jscomp$54$$ = $FS$getStreamChecked$$($JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$);
    switch($op$jscomp$1$$) {
      case 21509:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21505:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        if ($stream$jscomp$54$$.tty.$ops$.$ioctl_tcgets$) {
          $JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$ = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var $argp$$ = $syscallGetVarargI$$();
          $HEAP32$$[$argp$$ >> 2] = 25856;
          $HEAP32$$[$argp$$ + 4 >> 2] = 5;
          $HEAP32$$[$argp$$ + 8 >> 2] = 191;
          $HEAP32$$[$argp$$ + 12 >> 2] = 35387;
          for (var $i$jscomp$23_winsize$$ = 0; 32 > $i$jscomp$23_winsize$$; $i$jscomp$23_winsize$$++) {
            $HEAP8$$[$argp$$ + $i$jscomp$23_winsize$$ + 17] = $JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$[$i$jscomp$23_winsize$$] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        if ($stream$jscomp$54$$.tty.$ops$.$ioctl_tcsets$) {
          for ($argp$$ = $syscallGetVarargI$$(), $JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$ = [], $i$jscomp$23_winsize$$ = 0; 32 > $i$jscomp$23_winsize$$; $i$jscomp$23_winsize$$++) {
            $JSCompiler_object_inline_c_cc_321_c_cc_fd$jscomp$36$$.push($HEAP8$$[$argp$$ + $i$jscomp$23_winsize$$ + 17]);
          }
        }
        return 0;
      case 21519:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        $argp$$ = $syscallGetVarargI$$();
        return $HEAP32$$[$argp$$ >> 2] = 0;
      case 21520:
        return $stream$jscomp$54$$.tty ? -28 : -59;
      case 21537:
      case 21531:
        $argp$$ = $syscallGetVarargI$$();
        if (!$stream$jscomp$54$$.$stream_ops$.$ioctl$) {
          throw new $FS$ErrnoError$$(59);
        }
        return $stream$jscomp$54$$.$stream_ops$.$ioctl$($stream$jscomp$54$$, $op$jscomp$1$$, $argp$$);
      case 21523:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        $stream$jscomp$54$$.tty.$ops$.$ioctl_tiocgwinsz$ && ($i$jscomp$23_winsize$$ = [24, 80], $argp$$ = $syscallGetVarargI$$(), $HEAP16$$[$argp$$ >> 1] = $i$jscomp$23_winsize$$[0], $HEAP16$$[$argp$$ + 2 >> 1] = $i$jscomp$23_winsize$$[1]);
        return 0;
      case 21524:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21515:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch ($e$jscomp$29$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$29$$.name) {
      throw $e$jscomp$29$$;
    }
    return -$e$jscomp$29$$.$errno$;
  }
}, __syscall_openat:function($dirfd$jscomp$1$$, $path$jscomp$76$$, $flags$jscomp$17$$, $varargs$jscomp$2$$) {
  $SYSCALLS$varargs$$ = $varargs$jscomp$2$$;
  try {
    $path$jscomp$76$$ = $UTF8ToString$$($path$jscomp$76$$);
    var $path$jscomp$inline_172$$ = $path$jscomp$76$$;
    if ("/" === $path$jscomp$inline_172$$.charAt(0)) {
      $path$jscomp$76$$ = $path$jscomp$inline_172$$;
    } else {
      var $dir$jscomp$inline_174$$ = -100 === $dirfd$jscomp$1$$ ? "/" : $FS$getStreamChecked$$($dirfd$jscomp$1$$).path;
      if (0 == $path$jscomp$inline_172$$.length) {
        throw new $FS$ErrnoError$$(44);
      }
      $path$jscomp$76$$ = $dir$jscomp$inline_174$$ + "/" + $path$jscomp$inline_172$$;
    }
    var $mode$jscomp$53$$ = $varargs$jscomp$2$$ ? $syscallGetVarargI$$() : 0;
    return $FS$open$$($path$jscomp$76$$, $flags$jscomp$17$$, $mode$jscomp$53$$).fd;
  } catch ($e$jscomp$30$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$30$$.name) {
      throw $e$jscomp$30$$;
    }
    return -$e$jscomp$30$$.$errno$;
  }
}, _abort_js:() => $abort$$(""), _embind_register_bigint:($primitiveType$$, $name$jscomp$105$$, $size$jscomp$26$$, $isUnsignedType_minRange$$, $maxRange$$) => {
  $name$jscomp$105$$ = $AsciiToString$$($name$jscomp$105$$);
  $isUnsignedType_minRange$$ = 0n === $isUnsignedType_minRange$$;
  let $fromWireType$$ = $value$jscomp$112$$ => $value$jscomp$112$$;
  if ($isUnsignedType_minRange$$) {
    const $bitSize$$ = 8 * $size$jscomp$26$$;
    $fromWireType$$ = $value$jscomp$113$$ => BigInt.asUintN($bitSize$$, $value$jscomp$113$$);
    $maxRange$$ = $fromWireType$$($maxRange$$);
  }
  $registerType$$($primitiveType$$, {name:$name$jscomp$105$$, $fromWireType$:$fromWireType$$, $toWireType$:($destructors$$, $value$jscomp$114$$) => {
    "number" == typeof $value$jscomp$114$$ && ($value$jscomp$114$$ = BigInt($value$jscomp$114$$));
    return $value$jscomp$114$$;
  }, $readValueFromPointer$:$integerReadValueFromPointer$$($name$jscomp$105$$, $size$jscomp$26$$, !$isUnsignedType_minRange$$), $destructorFunction$:null});
}, _embind_register_bool:($rawType$jscomp$2$$, $name$jscomp$106$$, $trueValue$$, $falseValue$$) => {
  $name$jscomp$106$$ = $AsciiToString$$($name$jscomp$106$$);
  $registerType$$($rawType$jscomp$2$$, {name:$name$jscomp$106$$, $fromWireType$:function($wt$$) {
    return !!$wt$$;
  }, $toWireType$:function($destructors$jscomp$1$$, $o$$) {
    return $o$$ ? $trueValue$$ : $falseValue$$;
  }, $readValueFromPointer$:function($pointer$jscomp$8$$) {
    return this.$fromWireType$($HEAPU8$$[$pointer$jscomp$8$$]);
  }, $destructorFunction$:null});
}, _embind_register_emval:$rawType$jscomp$3$$ => $registerType$$($rawType$jscomp$3$$, $EmValType$$), _embind_register_float:($rawType$jscomp$4$$, $name$jscomp$108$$, $size$jscomp$27$$) => {
  $name$jscomp$108$$ = $AsciiToString$$($name$jscomp$108$$);
  $registerType$$($rawType$jscomp$4$$, {name:$name$jscomp$108$$, $fromWireType$:$value$jscomp$117$$ => $value$jscomp$117$$, $toWireType$:($destructors$jscomp$3$$, $value$jscomp$118$$) => $value$jscomp$118$$, $readValueFromPointer$:$floatReadValueFromPointer$$($name$jscomp$108$$, $size$jscomp$27$$), $destructorFunction$:null});
}, _embind_register_integer:($primitiveType$jscomp$1$$, $name$jscomp$109$$, $size$jscomp$28$$, $minRange$jscomp$1$$, $maxRange$jscomp$1$$) => {
  $name$jscomp$109$$ = $AsciiToString$$($name$jscomp$109$$);
  let $fromWireType$jscomp$1$$ = $value$jscomp$119$$ => $value$jscomp$119$$;
  if (0 === $minRange$jscomp$1$$) {
    var $bitshift$$ = 32 - 8 * $size$jscomp$28$$;
    $fromWireType$jscomp$1$$ = $value$jscomp$120$$ => $value$jscomp$120$$ << $bitshift$$ >>> $bitshift$$;
    $maxRange$jscomp$1$$ = $fromWireType$jscomp$1$$($maxRange$jscomp$1$$);
  }
  $registerType$$($primitiveType$jscomp$1$$, {name:$name$jscomp$109$$, $fromWireType$:$fromWireType$jscomp$1$$, $toWireType$:($destructors$jscomp$4$$, $value$jscomp$121$$) => $value$jscomp$121$$, $readValueFromPointer$:$integerReadValueFromPointer$$($name$jscomp$109$$, $size$jscomp$28$$, 0 !== $minRange$jscomp$1$$), $destructorFunction$:null});
}, _embind_register_memory_view:($rawType$jscomp$5$$, $dataTypeIndex$$, $name$jscomp$110$$) => {
  function $decodeMemoryView$$($handle$jscomp$16$$) {
    return new $TA$$($HEAP8$$.buffer, $HEAPU32$$[$handle$jscomp$16$$ + 4 >> 2], $HEAPU32$$[$handle$jscomp$16$$ >> 2]);
  }
  var $TA$$ = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][$dataTypeIndex$$];
  $name$jscomp$110$$ = $AsciiToString$$($name$jscomp$110$$);
  $registerType$$($rawType$jscomp$5$$, {name:$name$jscomp$110$$, $fromWireType$:$decodeMemoryView$$, $readValueFromPointer$:$decodeMemoryView$$}, {$ignoreDuplicateRegistrations$:!0});
}, _embind_register_std_string:($rawType$jscomp$6$$, $name$jscomp$111$$) => {
  $name$jscomp$111$$ = $AsciiToString$$($name$jscomp$111$$);
  $registerType$$($rawType$jscomp$6$$, {name:$name$jscomp$111$$, $fromWireType$($value$jscomp$122$$) {
    var $str$jscomp$14$$ = $UTF8ToString$$($value$jscomp$122$$ + 4, $HEAPU32$$[$value$jscomp$122$$ >> 2], !0);
    $_free$$($value$jscomp$122$$);
    return $str$jscomp$14$$;
  }, $toWireType$($destructors$jscomp$5$$, $value$jscomp$123$$) {
    $value$jscomp$123$$ instanceof ArrayBuffer && ($value$jscomp$123$$ = new Uint8Array($value$jscomp$123$$));
    var $valueIsOfTypeString$$ = "string" == typeof $value$jscomp$123$$;
    if (!($valueIsOfTypeString$$ || ArrayBuffer.isView($value$jscomp$123$$) && 1 == $value$jscomp$123$$.BYTES_PER_ELEMENT)) {
      throw new $BindingError$$("Cannot pass non-string to std::string");
    }
    var $length$jscomp$46$$ = $valueIsOfTypeString$$ ? $lengthBytesUTF8$$($value$jscomp$123$$) : $value$jscomp$123$$.length;
    var $base$jscomp$3$$ = $_malloc$$(4 + $length$jscomp$46$$ + 1), $ptr$jscomp$8$$ = $base$jscomp$3$$ + 4;
    $HEAPU32$$[$base$jscomp$3$$ >> 2] = $length$jscomp$46$$;
    $valueIsOfTypeString$$ ? $stringToUTF8Array$$($value$jscomp$123$$, $HEAPU8$$, $ptr$jscomp$8$$, $length$jscomp$46$$ + 1) : $HEAPU8$$.set($value$jscomp$123$$, $ptr$jscomp$8$$);
    null !== $destructors$jscomp$5$$ && $destructors$jscomp$5$$.push($_free$$, $base$jscomp$3$$);
    return $base$jscomp$3$$;
  }, $readValueFromPointer$:$readPointer$$, $destructorFunction$($ptr$jscomp$9$$) {
    $_free$$($ptr$jscomp$9$$);
  }});
}, _embind_register_std_wstring:($rawType$jscomp$7$$, $charSize$$, $name$jscomp$112$$) => {
  $name$jscomp$112$$ = $AsciiToString$$($name$jscomp$112$$);
  if (2 === $charSize$$) {
    var $decodeString$$ = $UTF16ToString$$;
    var $encodeString$$ = $stringToUTF16$$;
    var $lengthBytesUTF$$ = $lengthBytesUTF16$$;
  } else {
    $decodeString$$ = $UTF32ToString$$, $encodeString$$ = $stringToUTF32$$, $lengthBytesUTF$$ = $lengthBytesUTF32$$;
  }
  $registerType$$($rawType$jscomp$7$$, {name:$name$jscomp$112$$, $fromWireType$:$value$jscomp$124$$ => {
    var $str$jscomp$20$$ = $decodeString$$($value$jscomp$124$$ + 4, $HEAPU32$$[$value$jscomp$124$$ >> 2] * $charSize$$, !0);
    $_free$$($value$jscomp$124$$);
    return $str$jscomp$20$$;
  }, $toWireType$:($destructors$jscomp$6$$, $value$jscomp$125$$) => {
    if ("string" != typeof $value$jscomp$125$$) {
      throw new $BindingError$$(`Cannot pass non-string to C++ string type ${$name$jscomp$112$$}`);
    }
    var $length$jscomp$48$$ = $lengthBytesUTF$$($value$jscomp$125$$), $ptr$jscomp$12$$ = $_malloc$$(4 + $length$jscomp$48$$ + $charSize$$);
    $HEAPU32$$[$ptr$jscomp$12$$ >> 2] = $length$jscomp$48$$ / $charSize$$;
    $encodeString$$($value$jscomp$125$$, $ptr$jscomp$12$$ + 4, $length$jscomp$48$$ + $charSize$$);
    null !== $destructors$jscomp$6$$ && $destructors$jscomp$6$$.push($_free$$, $ptr$jscomp$12$$);
    return $ptr$jscomp$12$$;
  }, $readValueFromPointer$:$readPointer$$, $destructorFunction$($ptr$jscomp$13$$) {
    $_free$$($ptr$jscomp$13$$);
  }});
}, _embind_register_void:($rawType$jscomp$8$$, $name$jscomp$113$$) => {
  $name$jscomp$113$$ = $AsciiToString$$($name$jscomp$113$$);
  $registerType$$($rawType$jscomp$8$$, {$isVoid$:!0, name:$name$jscomp$113$$, $fromWireType$:() => {
  }, $toWireType$:() => {
  }});
}, _emscripten_throw_longjmp:() => {
  throw Infinity;
}, _localtime_js:function($date$jscomp$4_time$$, $tmPtr$$) {
  $date$jscomp$4_time$$ = -9007199254740992 > $date$jscomp$4_time$$ || 9007199254740992 < $date$jscomp$4_time$$ ? NaN : Number($date$jscomp$4_time$$);
  $date$jscomp$4_time$$ = new Date(1000 * $date$jscomp$4_time$$);
  $HEAP32$$[$tmPtr$$ >> 2] = $date$jscomp$4_time$$.getSeconds();
  $HEAP32$$[$tmPtr$$ + 4 >> 2] = $date$jscomp$4_time$$.getMinutes();
  $HEAP32$$[$tmPtr$$ + 8 >> 2] = $date$jscomp$4_time$$.getHours();
  $HEAP32$$[$tmPtr$$ + 12 >> 2] = $date$jscomp$4_time$$.getDate();
  $HEAP32$$[$tmPtr$$ + 16 >> 2] = $date$jscomp$4_time$$.getMonth();
  $HEAP32$$[$tmPtr$$ + 20 >> 2] = $date$jscomp$4_time$$.getFullYear() - 1900;
  $HEAP32$$[$tmPtr$$ + 24 >> 2] = $date$jscomp$4_time$$.getDay();
  $HEAP32$$[$tmPtr$$ + 28 >> 2] = ($isLeapYear$$($date$jscomp$4_time$$.getFullYear()) ? $MONTH_DAYS_LEAP_CUMULATIVE$$ : $MONTH_DAYS_REGULAR_CUMULATIVE$$)[$date$jscomp$4_time$$.getMonth()] + $date$jscomp$4_time$$.getDate() - 1 | 0;
  $HEAP32$$[$tmPtr$$ + 36 >> 2] = -(60 * $date$jscomp$4_time$$.getTimezoneOffset());
  var $summerOffset$$ = (new Date($date$jscomp$4_time$$.getFullYear(), 6, 1)).getTimezoneOffset(), $winterOffset$$ = (new Date($date$jscomp$4_time$$.getFullYear(), 0, 1)).getTimezoneOffset();
  $HEAP32$$[$tmPtr$$ + 32 >> 2] = ($summerOffset$$ != $winterOffset$$ && $date$jscomp$4_time$$.getTimezoneOffset() == Math.min($winterOffset$$, $summerOffset$$)) | 0;
}, _mktime_js:function($timeMs$jscomp$inline_187_tmPtr$jscomp$1$$) {
  var $date$jscomp$inline_180$$ = new Date($HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 20 >> 2] + 1900, $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 16 >> 2], $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 12 >> 2], $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 8 >> 2], $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 4 >> 2], $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ >> 2], 0), $dst$jscomp$inline_181$$ = $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 
  32 >> 2], $guessedOffset$jscomp$inline_182$$ = $date$jscomp$inline_180$$.getTimezoneOffset(), $nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$ = (new Date($date$jscomp$inline_180$$.getFullYear(), 6, 1)).getTimezoneOffset(), $winterOffset$jscomp$inline_184$$ = (new Date($date$jscomp$inline_180$$.getFullYear(), 0, 1)).getTimezoneOffset(), $dstOffset$jscomp$inline_185$$ = Math.min($winterOffset$jscomp$inline_184$$, $nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$);
  0 > $dst$jscomp$inline_181$$ ? $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 32 >> 2] = Number($nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$ != $winterOffset$jscomp$inline_184$$ && $dstOffset$jscomp$inline_185$$ == $guessedOffset$jscomp$inline_182$$) : 0 < $dst$jscomp$inline_181$$ != ($dstOffset$jscomp$inline_185$$ == $guessedOffset$jscomp$inline_182$$) && ($nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$ = Math.max($winterOffset$jscomp$inline_184$$, 
  $nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$), $date$jscomp$inline_180$$.setTime($date$jscomp$inline_180$$.getTime() + 60000 * ((0 < $dst$jscomp$inline_181$$ ? $dstOffset$jscomp$inline_185$$ : $nonDstOffset$jscomp$inline_186_summerOffset$jscomp$inline_183$$) - $guessedOffset$jscomp$inline_182$$)));
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 24 >> 2] = $date$jscomp$inline_180$$.getDay();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 28 >> 2] = ($isLeapYear$$($date$jscomp$inline_180$$.getFullYear()) ? $MONTH_DAYS_LEAP_CUMULATIVE$$ : $MONTH_DAYS_REGULAR_CUMULATIVE$$)[$date$jscomp$inline_180$$.getMonth()] + $date$jscomp$inline_180$$.getDate() - 1 | 0;
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ >> 2] = $date$jscomp$inline_180$$.getSeconds();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 4 >> 2] = $date$jscomp$inline_180$$.getMinutes();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 8 >> 2] = $date$jscomp$inline_180$$.getHours();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 12 >> 2] = $date$jscomp$inline_180$$.getDate();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 16 >> 2] = $date$jscomp$inline_180$$.getMonth();
  $HEAP32$$[$timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ + 20 >> 2] = $date$jscomp$inline_180$$.getYear();
  $timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ = $date$jscomp$inline_180$$.getTime();
  return BigInt(isNaN($timeMs$jscomp$inline_187_tmPtr$jscomp$1$$) ? -1 : $timeMs$jscomp$inline_187_tmPtr$jscomp$1$$ / 1000);
}, _tzset_js:($timezone_winterName$$, $daylight_extractZone_summerName$$, $std_name$$, $dst_name$$) => {
  var $currentYear_summerOffset$jscomp$2$$ = (new Date()).getFullYear(), $winterOffset$jscomp$2$$ = (new Date($currentYear_summerOffset$jscomp$2$$, 0, 1)).getTimezoneOffset();
  $currentYear_summerOffset$jscomp$2$$ = (new Date($currentYear_summerOffset$jscomp$2$$, 6, 1)).getTimezoneOffset();
  $HEAPU32$$[$timezone_winterName$$ >> 2] = 60 * Math.max($winterOffset$jscomp$2$$, $currentYear_summerOffset$jscomp$2$$);
  $HEAP32$$[$daylight_extractZone_summerName$$ >> 2] = Number($winterOffset$jscomp$2$$ != $currentYear_summerOffset$jscomp$2$$);
  $daylight_extractZone_summerName$$ = $timezoneOffset$$ => {
    var $absOffset$$ = Math.abs($timezoneOffset$$);
    return `UTC${0 <= $timezoneOffset$$ ? "-" : "+"}${String(Math.floor($absOffset$$ / 60)).padStart(2, "0")}${String($absOffset$$ % 60).padStart(2, "0")}`;
  };
  $timezone_winterName$$ = $daylight_extractZone_summerName$$($winterOffset$jscomp$2$$);
  $daylight_extractZone_summerName$$ = $daylight_extractZone_summerName$$($currentYear_summerOffset$jscomp$2$$);
  $currentYear_summerOffset$jscomp$2$$ < $winterOffset$jscomp$2$$ ? ($stringToUTF8Array$$($timezone_winterName$$, $HEAPU8$$, $std_name$$, 17), $stringToUTF8Array$$($daylight_extractZone_summerName$$, $HEAPU8$$, $dst_name$$, 17)) : ($stringToUTF8Array$$($timezone_winterName$$, $HEAPU8$$, $dst_name$$, 17), $stringToUTF8Array$$($daylight_extractZone_summerName$$, $HEAPU8$$, $std_name$$, 17));
}, emscripten_date_now:() => Date.now(), emscripten_get_element_css_size:($rect_target$jscomp$93$$, $width$jscomp$30$$, $height$jscomp$25$$) => {
  $rect_target$jscomp$93$$ = $findEventTarget$$($rect_target$jscomp$93$$);
  if (!$rect_target$jscomp$93$$) {
    return -4;
  }
  $rect_target$jscomp$93$$ = 0 > $specialHTMLTargets$$.indexOf($rect_target$jscomp$93$$) ? $rect_target$jscomp$93$$.getBoundingClientRect() : {left:0, top:0};
  $HEAPF64$$[$width$jscomp$30$$ >> 3] = $rect_target$jscomp$93$$.width;
  $HEAPF64$$[$height$jscomp$25$$ >> 3] = $rect_target$jscomp$93$$.height;
  return 0;
}, emscripten_pause_main_loop:() => $MainLoop$pause$$(), emscripten_resize_heap:$requestedSize$$ => {
  var $oldSize$$ = $HEAPU8$$.length;
  $requestedSize$$ >>>= 0;
  if (2147483648 < $requestedSize$$) {
    return !1;
  }
  for (var $cutDown$$ = 1; 4 >= $cutDown$$; $cutDown$$ *= 2) {
    var $overGrownHeapSize_pages$jscomp$inline_193$$ = $oldSize$$ * (1 + 0.2 / $cutDown$$);
    $overGrownHeapSize_pages$jscomp$inline_193$$ = Math.min($overGrownHeapSize_pages$jscomp$inline_193$$, $requestedSize$$ + 100663296);
    a: {
      $overGrownHeapSize_pages$jscomp$inline_193$$ = (Math.min(2147483648, 65536 * Math.ceil(Math.max($requestedSize$$, $overGrownHeapSize_pages$jscomp$inline_193$$) / 65536)) - $wasmMemory$$.buffer.byteLength + 65535) / 65536 | 0;
      try {
        $wasmMemory$$.grow($overGrownHeapSize_pages$jscomp$inline_193$$);
        $updateMemoryViews$$();
        var $JSCompiler_inline_result$jscomp$18$$ = 1;
        break a;
      } catch ($e$jscomp$inline_194$$) {
      }
      $JSCompiler_inline_result$jscomp$18$$ = void 0;
    }
    if ($JSCompiler_inline_result$jscomp$18$$) {
      return !0;
    }
  }
  return !1;
}, emscripten_resume_main_loop:() => $MainLoop$resume$$(), emscripten_run_script:$ptr$jscomp$14$$ => {
  eval($UTF8ToString$$($ptr$jscomp$14$$));
}, emscripten_set_main_loop:($func$jscomp$14_iterFunc$jscomp$1$$, $fps$jscomp$1$$, $simulateInfiniteLoop$jscomp$1$$) => {
  $func$jscomp$14_iterFunc$jscomp$1$$ = $wasmTable$$.get($func$jscomp$14_iterFunc$jscomp$1$$);
  $setMainLoop$$($func$jscomp$14_iterFunc$jscomp$1$$, $fps$jscomp$1$$, $simulateInfiniteLoop$jscomp$1$$);
}, emscripten_set_resize_callback_on_thread:($target$jscomp$98$$, $userData$jscomp$1$$, $useCapture$jscomp$1$$, $callbackfunc$jscomp$1$$) => $registerUiEventCallback$$($target$jscomp$98$$, $userData$jscomp$1$$, $useCapture$jscomp$1$$, $callbackfunc$jscomp$1$$), environ_get:($__environ$$, $environ_buf$$) => {
  var $bufSize$$ = 0, $envp$$ = 0, $string$jscomp$14$$;
  for ($string$jscomp$14$$ of $getEnvStrings$$()) {
    var $ptr$jscomp$15$$ = $environ_buf$$ + $bufSize$$;
    $HEAPU32$$[$__environ$$ + $envp$$ >> 2] = $ptr$jscomp$15$$;
    $bufSize$$ += $stringToUTF8Array$$($string$jscomp$14$$, $HEAPU8$$, $ptr$jscomp$15$$, Infinity) + 1;
    $envp$$ += 4;
  }
  return 0;
}, environ_sizes_get:($bufSize$jscomp$1_penviron_count$$, $penviron_buf_size$$) => {
  var $strings$jscomp$1$$ = $getEnvStrings$$();
  $HEAPU32$$[$bufSize$jscomp$1_penviron_count$$ >> 2] = $strings$jscomp$1$$.length;
  $bufSize$jscomp$1_penviron_count$$ = 0;
  for (var $string$jscomp$15$$ of $strings$jscomp$1$$) {
    $bufSize$jscomp$1_penviron_count$$ += $lengthBytesUTF8$$($string$jscomp$15$$) + 1;
  }
  $HEAPU32$$[$penviron_buf_size$$ >> 2] = $bufSize$jscomp$1_penviron_count$$;
  return 0;
}, fd_close:function($fd$jscomp$37$$) {
  try {
    var $stream$jscomp$55$$ = $FS$getStreamChecked$$($fd$jscomp$37$$);
    $FS$close$$($stream$jscomp$55$$);
    return 0;
  } catch ($e$jscomp$37$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$37$$.name) {
      throw $e$jscomp$37$$;
    }
    return $e$jscomp$37$$.$errno$;
  }
}, fd_read:function($fd$jscomp$38_iov$jscomp$inline_197$$, $iov$jscomp$1_ret$jscomp$inline_200$$, $iovcnt$jscomp$1$$, $pnum$$) {
  try {
    a: {
      var $stream$jscomp$inline_196$$ = $FS$getStreamChecked$$($fd$jscomp$38_iov$jscomp$inline_197$$);
      $fd$jscomp$38_iov$jscomp$inline_197$$ = $iov$jscomp$1_ret$jscomp$inline_200$$;
      for (var $offset$jscomp$inline_199$$, $i$jscomp$inline_201$$ = $iov$jscomp$1_ret$jscomp$inline_200$$ = 0; $i$jscomp$inline_201$$ < $iovcnt$jscomp$1$$; $i$jscomp$inline_201$$++) {
        var $ptr$jscomp$inline_202$$ = $HEAPU32$$[$fd$jscomp$38_iov$jscomp$inline_197$$ >> 2], $len$jscomp$inline_203$$ = $HEAPU32$$[$fd$jscomp$38_iov$jscomp$inline_197$$ + 4 >> 2];
        $fd$jscomp$38_iov$jscomp$inline_197$$ += 8;
        var $stream$jscomp$inline_360$$ = $stream$jscomp$inline_196$$, $offset$jscomp$inline_361$$ = $ptr$jscomp$inline_202$$, $length$jscomp$inline_362$$ = $len$jscomp$inline_203$$, $position$jscomp$inline_363$$ = $offset$jscomp$inline_199$$, $buffer$jscomp$inline_364$$ = $HEAP8$$;
        if (0 > $length$jscomp$inline_362$$ || 0 > $position$jscomp$inline_363$$) {
          throw new $FS$ErrnoError$$(28);
        }
        if (null === $stream$jscomp$inline_360$$.fd) {
          throw new $FS$ErrnoError$$(8);
        }
        if (1 === ($stream$jscomp$inline_360$$.flags & 2097155)) {
          throw new $FS$ErrnoError$$(8);
        }
        if ($FS$isDir$$($stream$jscomp$inline_360$$.node.mode)) {
          throw new $FS$ErrnoError$$(31);
        }
        if (!$stream$jscomp$inline_360$$.$stream_ops$.read) {
          throw new $FS$ErrnoError$$(28);
        }
        var $seeking$jscomp$inline_365$$ = "undefined" != typeof $position$jscomp$inline_363$$;
        if (!$seeking$jscomp$inline_365$$) {
          $position$jscomp$inline_363$$ = $stream$jscomp$inline_360$$.position;
        } else if (!$stream$jscomp$inline_360$$.seekable) {
          throw new $FS$ErrnoError$$(70);
        }
        var $bytesRead$jscomp$inline_366$$ = $stream$jscomp$inline_360$$.$stream_ops$.read($stream$jscomp$inline_360$$, $buffer$jscomp$inline_364$$, $offset$jscomp$inline_361$$, $length$jscomp$inline_362$$, $position$jscomp$inline_363$$);
        $seeking$jscomp$inline_365$$ || ($stream$jscomp$inline_360$$.position += $bytesRead$jscomp$inline_366$$);
        var $curr$jscomp$inline_204$$ = $bytesRead$jscomp$inline_366$$;
        if (0 > $curr$jscomp$inline_204$$) {
          var $num$jscomp$7$$ = -1;
          break a;
        }
        $iov$jscomp$1_ret$jscomp$inline_200$$ += $curr$jscomp$inline_204$$;
        if ($curr$jscomp$inline_204$$ < $len$jscomp$inline_203$$) {
          break;
        }
        "undefined" != typeof $offset$jscomp$inline_199$$ && ($offset$jscomp$inline_199$$ += $curr$jscomp$inline_204$$);
      }
      $num$jscomp$7$$ = $iov$jscomp$1_ret$jscomp$inline_200$$;
    }
    $HEAPU32$$[$pnum$$ >> 2] = $num$jscomp$7$$;
    return 0;
  } catch ($e$jscomp$38$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$38$$.name) {
      throw $e$jscomp$38$$;
    }
    return $e$jscomp$38$$.$errno$;
  }
}, fd_seek:function($fd$jscomp$39$$, $offset$jscomp$86$$, $whence$jscomp$2$$, $newOffset$$) {
  $offset$jscomp$86$$ = -9007199254740992 > $offset$jscomp$86$$ || 9007199254740992 < $offset$jscomp$86$$ ? NaN : Number($offset$jscomp$86$$);
  try {
    if (isNaN($offset$jscomp$86$$)) {
      return 61;
    }
    var $stream$jscomp$58$$ = $FS$getStreamChecked$$($fd$jscomp$39$$);
    $FS$llseek$$($stream$jscomp$58$$, $offset$jscomp$86$$, $whence$jscomp$2$$);
    $HEAP64$$[$newOffset$$ >> 3] = BigInt($stream$jscomp$58$$.position);
    $stream$jscomp$58$$.$getdents$ && 0 === $offset$jscomp$86$$ && 0 === $whence$jscomp$2$$ && ($stream$jscomp$58$$.$getdents$ = null);
    return 0;
  } catch ($e$jscomp$39$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$39$$.name) {
      throw $e$jscomp$39$$;
    }
    return $e$jscomp$39$$.$errno$;
  }
}, fd_write:function($fd$jscomp$40_iov$jscomp$inline_207$$, $iov$jscomp$3_ret$jscomp$inline_210$$, $iovcnt$jscomp$3$$, $pnum$jscomp$1$$) {
  try {
    a: {
      var $stream$jscomp$inline_206$$ = $FS$getStreamChecked$$($fd$jscomp$40_iov$jscomp$inline_207$$);
      $fd$jscomp$40_iov$jscomp$inline_207$$ = $iov$jscomp$3_ret$jscomp$inline_210$$;
      for (var $offset$jscomp$inline_209$$, $i$jscomp$inline_211$$ = $iov$jscomp$3_ret$jscomp$inline_210$$ = 0; $i$jscomp$inline_211$$ < $iovcnt$jscomp$3$$; $i$jscomp$inline_211$$++) {
        var $ptr$jscomp$inline_212$$ = $HEAPU32$$[$fd$jscomp$40_iov$jscomp$inline_207$$ >> 2], $len$jscomp$inline_213$$ = $HEAPU32$$[$fd$jscomp$40_iov$jscomp$inline_207$$ + 4 >> 2];
        $fd$jscomp$40_iov$jscomp$inline_207$$ += 8;
        var $curr$jscomp$inline_214$$ = $FS$write$$($stream$jscomp$inline_206$$, $HEAP8$$, $ptr$jscomp$inline_212$$, $len$jscomp$inline_213$$, $offset$jscomp$inline_209$$);
        if (0 > $curr$jscomp$inline_214$$) {
          var $num$jscomp$8$$ = -1;
          break a;
        }
        $iov$jscomp$3_ret$jscomp$inline_210$$ += $curr$jscomp$inline_214$$;
        if ($curr$jscomp$inline_214$$ < $len$jscomp$inline_213$$) {
          break;
        }
        "undefined" != typeof $offset$jscomp$inline_209$$ && ($offset$jscomp$inline_209$$ += $curr$jscomp$inline_214$$);
      }
      $num$jscomp$8$$ = $iov$jscomp$3_ret$jscomp$inline_210$$;
    }
    $HEAPU32$$[$pnum$jscomp$1$$ >> 2] = $num$jscomp$8$$;
    return 0;
  } catch ($e$jscomp$40$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$40$$.name) {
      throw $e$jscomp$40$$;
    }
    return $e$jscomp$40$$.$errno$;
  }
}, glActiveTexture:$x0$jscomp$2$$ => $GLctx$$.activeTexture($x0$jscomp$2$$), glAttachShader:($program$jscomp$63$$, $shader$jscomp$11$$) => {
  $GLctx$$.attachShader($GL$programs$$[$program$jscomp$63$$], $GL$shaders$$[$shader$jscomp$11$$]);
}, glBindBuffer:($target$jscomp$99$$, $buffer$jscomp$42$$) => {
  35051 == $target$jscomp$99$$ ? $GLctx$$.$currentPixelPackBufferBinding$ = $buffer$jscomp$42$$ : 35052 == $target$jscomp$99$$ && ($GLctx$$.$currentPixelUnpackBufferBinding$ = $buffer$jscomp$42$$);
  $GLctx$$.bindBuffer($target$jscomp$99$$, $GL$buffers$$[$buffer$jscomp$42$$]);
}, glBindFramebuffer:($target$jscomp$100$$, $framebuffer$jscomp$1$$) => {
  $GLctx$$.bindFramebuffer($target$jscomp$100$$, $GL$framebuffers$$[$framebuffer$jscomp$1$$]);
}, glBindRenderbuffer:($target$jscomp$101$$, $renderbuffer$jscomp$2$$) => {
  $GLctx$$.bindRenderbuffer($target$jscomp$101$$, $GL$renderbuffers$$[$renderbuffer$jscomp$2$$]);
}, glBindTexture:($target$jscomp$102$$, $texture$jscomp$7$$) => {
  $GLctx$$.bindTexture($target$jscomp$102$$, $GL$textures$$[$texture$jscomp$7$$]);
}, glBindVertexArray:$vao$jscomp$3$$ => {
  $GLctx$$.bindVertexArray($GL$vaos$$[$vao$jscomp$3$$]);
}, glBlitFramebuffer:($x0$jscomp$3$$, $x1$jscomp$5$$, $x2$jscomp$3$$, $x3$$, $x4$$, $x5$$, $x6$$, $x7$$, $x8$$, $x9$$) => $GLctx$$.blitFramebuffer($x0$jscomp$3$$, $x1$jscomp$5$$, $x2$jscomp$3$$, $x3$$, $x4$$, $x5$$, $x6$$, $x7$$, $x8$$, $x9$$), glBufferData:($target$jscomp$103$$, $size$jscomp$33$$, $data$jscomp$96$$, $usage$jscomp$2$$) => {
  2 <= $GL$currentContext$$.version ? $data$jscomp$96$$ && $size$jscomp$33$$ ? $GLctx$$.bufferData($target$jscomp$103$$, $HEAPU8$$, $usage$jscomp$2$$, $data$jscomp$96$$, $size$jscomp$33$$) : $GLctx$$.bufferData($target$jscomp$103$$, $size$jscomp$33$$, $usage$jscomp$2$$) : $GLctx$$.bufferData($target$jscomp$103$$, $data$jscomp$96$$ ? $HEAPU8$$.subarray($data$jscomp$96$$, $data$jscomp$96$$ + $size$jscomp$33$$) : $size$jscomp$33$$, $usage$jscomp$2$$);
}, glClear:$x0$jscomp$4$$ => $GLctx$$.clear($x0$jscomp$4$$), glClearColor:($x0$jscomp$5$$, $x1$jscomp$6$$, $x2$jscomp$4$$, $x3$jscomp$1$$) => $GLctx$$.clearColor($x0$jscomp$5$$, $x1$jscomp$6$$, $x2$jscomp$4$$, $x3$jscomp$1$$), glClearDepthf:$x0$jscomp$6$$ => $GLctx$$.clearDepth($x0$jscomp$6$$), glCompileShader:$shader$jscomp$12$$ => {
  $GLctx$$.compileShader($GL$shaders$$[$shader$jscomp$12$$]);
}, glCreateProgram:() => {
  var $id$jscomp$12$$ = $GL$getNewId$$($GL$programs$$), $program$jscomp$64$$ = $GLctx$$.createProgram();
  $program$jscomp$64$$.name = $id$jscomp$12$$;
  $program$jscomp$64$$.$maxUniformLength$ = $program$jscomp$64$$.$maxAttributeLength$ = $program$jscomp$64$$.$maxUniformBlockNameLength$ = 0;
  $program$jscomp$64$$.$uniformIdCounter$ = 1;
  $GL$programs$$[$id$jscomp$12$$] = $program$jscomp$64$$;
  return $id$jscomp$12$$;
}, glCreateShader:$shaderType$$ => {
  var $id$jscomp$13$$ = $GL$getNewId$$($GL$shaders$$);
  $GL$shaders$$[$id$jscomp$13$$] = $GLctx$$.createShader($shaderType$$);
  return $id$jscomp$13$$;
}, glCullFace:$x0$jscomp$7$$ => $GLctx$$.cullFace($x0$jscomp$7$$), glDeleteBuffers:($n$jscomp$7$$, $buffers$jscomp$3$$) => {
  for (var $i$jscomp$39$$ = 0; $i$jscomp$39$$ < $n$jscomp$7$$; $i$jscomp$39$$++) {
    var $id$jscomp$14$$ = $HEAP32$$[$buffers$jscomp$3$$ + 4 * $i$jscomp$39$$ >> 2], $buffer$jscomp$43$$ = $GL$buffers$$[$id$jscomp$14$$];
    $buffer$jscomp$43$$ && ($GLctx$$.deleteBuffer($buffer$jscomp$43$$), $buffer$jscomp$43$$.name = 0, $GL$buffers$$[$id$jscomp$14$$] = null, $id$jscomp$14$$ == $GLctx$$.$currentPixelPackBufferBinding$ && ($GLctx$$.$currentPixelPackBufferBinding$ = 0), $id$jscomp$14$$ == $GLctx$$.$currentPixelUnpackBufferBinding$ && ($GLctx$$.$currentPixelUnpackBufferBinding$ = 0));
  }
}, glDeleteFramebuffers:($n$jscomp$8$$, $framebuffers$$) => {
  for (var $i$jscomp$40$$ = 0; $i$jscomp$40$$ < $n$jscomp$8$$; ++$i$jscomp$40$$) {
    var $id$jscomp$15$$ = $HEAP32$$[$framebuffers$$ + 4 * $i$jscomp$40$$ >> 2], $framebuffer$jscomp$2$$ = $GL$framebuffers$$[$id$jscomp$15$$];
    $framebuffer$jscomp$2$$ && ($GLctx$$.deleteFramebuffer($framebuffer$jscomp$2$$), $framebuffer$jscomp$2$$.name = 0, $GL$framebuffers$$[$id$jscomp$15$$] = null);
  }
}, glDeleteProgram:$id$jscomp$16$$ => {
  if ($id$jscomp$16$$) {
    var $program$jscomp$65$$ = $GL$programs$$[$id$jscomp$16$$];
    $program$jscomp$65$$ ? ($GLctx$$.deleteProgram($program$jscomp$65$$), $program$jscomp$65$$.name = 0, $GL$programs$$[$id$jscomp$16$$] = null) : $GL$lastError$$ ||= 1281;
  }
}, glDeleteRenderbuffers:($n$jscomp$9$$, $renderbuffers$$) => {
  for (var $i$jscomp$41$$ = 0; $i$jscomp$41$$ < $n$jscomp$9$$; $i$jscomp$41$$++) {
    var $id$jscomp$17$$ = $HEAP32$$[$renderbuffers$$ + 4 * $i$jscomp$41$$ >> 2], $renderbuffer$jscomp$3$$ = $GL$renderbuffers$$[$id$jscomp$17$$];
    $renderbuffer$jscomp$3$$ && ($GLctx$$.deleteRenderbuffer($renderbuffer$jscomp$3$$), $renderbuffer$jscomp$3$$.name = 0, $GL$renderbuffers$$[$id$jscomp$17$$] = null);
  }
}, glDeleteShader:$id$jscomp$18$$ => {
  if ($id$jscomp$18$$) {
    var $shader$jscomp$13$$ = $GL$shaders$$[$id$jscomp$18$$];
    $shader$jscomp$13$$ ? ($GLctx$$.deleteShader($shader$jscomp$13$$), $GL$shaders$$[$id$jscomp$18$$] = null) : $GL$lastError$$ ||= 1281;
  }
}, glDeleteTextures:($n$jscomp$10$$, $textures$$) => {
  for (var $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $n$jscomp$10$$; $i$jscomp$42$$++) {
    var $id$jscomp$19$$ = $HEAP32$$[$textures$$ + 4 * $i$jscomp$42$$ >> 2], $texture$jscomp$8$$ = $GL$textures$$[$id$jscomp$19$$];
    $texture$jscomp$8$$ && ($GLctx$$.deleteTexture($texture$jscomp$8$$), $texture$jscomp$8$$.name = 0, $GL$textures$$[$id$jscomp$19$$] = null);
  }
}, glDeleteVertexArrays:($n$jscomp$11$$, $vaos$$) => {
  for (var $i$jscomp$43$$ = 0; $i$jscomp$43$$ < $n$jscomp$11$$; $i$jscomp$43$$++) {
    var $id$jscomp$20$$ = $HEAP32$$[$vaos$$ + 4 * $i$jscomp$43$$ >> 2];
    $GLctx$$.deleteVertexArray($GL$vaos$$[$id$jscomp$20$$]);
    $GL$vaos$$[$id$jscomp$20$$] = null;
  }
}, glDepthFunc:$x0$jscomp$8$$ => $GLctx$$.depthFunc($x0$jscomp$8$$), glDepthMask:$flag$jscomp$4$$ => {
  $GLctx$$.depthMask(!!$flag$jscomp$4$$);
}, glDetachShader:($program$jscomp$66$$, $shader$jscomp$14$$) => {
  $GLctx$$.detachShader($GL$programs$$[$program$jscomp$66$$], $GL$shaders$$[$shader$jscomp$14$$]);
}, glDisable:$x0$jscomp$9$$ => $GLctx$$.disable($x0$jscomp$9$$), glDisableVertexAttribArray:$index$jscomp$103$$ => {
  $GLctx$$.disableVertexAttribArray($index$jscomp$103$$);
}, glDrawArrays:($mode$jscomp$57$$, $first$jscomp$5$$, $count$jscomp$42$$) => {
  $GLctx$$.drawArrays($mode$jscomp$57$$, $first$jscomp$5$$, $count$jscomp$42$$);
}, glDrawBuffers:($n$jscomp$12$$, $bufs$jscomp$1$$) => {
  for (var $bufArray$$ = $tempFixedLengthArray$$[$n$jscomp$12$$], $i$jscomp$44$$ = 0; $i$jscomp$44$$ < $n$jscomp$12$$; $i$jscomp$44$$++) {
    $bufArray$$[$i$jscomp$44$$] = $HEAP32$$[$bufs$jscomp$1$$ + 4 * $i$jscomp$44$$ >> 2];
  }
  $GLctx$$.drawBuffers($bufArray$$);
}, glDrawElements:($mode$jscomp$58$$, $count$jscomp$43$$, $type$jscomp$177$$, $indices$jscomp$1$$) => {
  $GLctx$$.drawElements($mode$jscomp$58$$, $count$jscomp$43$$, $type$jscomp$177$$, $indices$jscomp$1$$);
}, glEnable:$x0$jscomp$10$$ => $GLctx$$.enable($x0$jscomp$10$$), glEnableVertexAttribArray:$index$jscomp$104$$ => {
  $GLctx$$.enableVertexAttribArray($index$jscomp$104$$);
}, glFramebufferRenderbuffer:($target$jscomp$104$$, $attachment$jscomp$4$$, $renderbuffertarget$jscomp$1$$, $renderbuffer$jscomp$4$$) => {
  $GLctx$$.framebufferRenderbuffer($target$jscomp$104$$, $attachment$jscomp$4$$, $renderbuffertarget$jscomp$1$$, $GL$renderbuffers$$[$renderbuffer$jscomp$4$$]);
}, glFramebufferTexture2D:($target$jscomp$105$$, $attachment$jscomp$5$$, $textarget$jscomp$1$$, $texture$jscomp$9$$, $level$jscomp$19$$) => {
  $GLctx$$.framebufferTexture2D($target$jscomp$105$$, $attachment$jscomp$5$$, $textarget$jscomp$1$$, $GL$textures$$[$texture$jscomp$9$$], $level$jscomp$19$$);
}, glFrontFace:$x0$jscomp$11$$ => $GLctx$$.frontFace($x0$jscomp$11$$), glGenBuffers:($n$jscomp$13$$, $buffers$jscomp$4$$) => {
  $GL$genObject$$($n$jscomp$13$$, $buffers$jscomp$4$$, "createBuffer", $GL$buffers$$);
}, glGenFramebuffers:($n$jscomp$14$$, $ids$$) => {
  $GL$genObject$$($n$jscomp$14$$, $ids$$, "createFramebuffer", $GL$framebuffers$$);
}, glGenRenderbuffers:($n$jscomp$15$$, $renderbuffers$jscomp$1$$) => {
  $GL$genObject$$($n$jscomp$15$$, $renderbuffers$jscomp$1$$, "createRenderbuffer", $GL$renderbuffers$$);
}, glGenTextures:($n$jscomp$16$$, $textures$jscomp$1$$) => {
  $GL$genObject$$($n$jscomp$16$$, $textures$jscomp$1$$, "createTexture", $GL$textures$$);
}, glGenVertexArrays:($n$jscomp$17$$, $arrays$$) => {
  $GL$genObject$$($n$jscomp$17$$, $arrays$$, "createVertexArray", $GL$vaos$$);
}, glGenerateMipmap:$x0$jscomp$12$$ => $GLctx$$.generateMipmap($x0$jscomp$12$$), glGetActiveAttrib:($program$jscomp$68$$, $index$jscomp$106$$, $bufSize$jscomp$3$$, $length$jscomp$51$$, $size$jscomp$35$$, $type$jscomp$179$$, $name$jscomp$115$$) => $__glGetActiveAttribOrUniform$$("getActiveAttrib", $program$jscomp$68$$, $index$jscomp$106$$, $bufSize$jscomp$3$$, $length$jscomp$51$$, $size$jscomp$35$$, $type$jscomp$179$$, $name$jscomp$115$$), glGetActiveUniform:($program$jscomp$69$$, $index$jscomp$107$$, 
$bufSize$jscomp$4$$, $length$jscomp$52$$, $size$jscomp$36$$, $type$jscomp$180$$, $name$jscomp$116$$) => $__glGetActiveAttribOrUniform$$("getActiveUniform", $program$jscomp$69$$, $index$jscomp$107$$, $bufSize$jscomp$4$$, $length$jscomp$52$$, $size$jscomp$36$$, $type$jscomp$180$$, $name$jscomp$116$$), glGetAttribLocation:($program$jscomp$70$$, $name$jscomp$117$$) => $GLctx$$.getAttribLocation($GL$programs$$[$program$jscomp$70$$], $UTF8ToString$$($name$jscomp$117$$)), glGetProgramInfoLog:($log_program$jscomp$71$$, 
$maxLength_numBytesWrittenExclNull$jscomp$1$$, $length$jscomp$53$$, $infoLog$$) => {
  $log_program$jscomp$71$$ = $GLctx$$.getProgramInfoLog($GL$programs$$[$log_program$jscomp$71$$]);
  null === $log_program$jscomp$71$$ && ($log_program$jscomp$71$$ = "(unknown error)");
  $maxLength_numBytesWrittenExclNull$jscomp$1$$ = 0 < $maxLength_numBytesWrittenExclNull$jscomp$1$$ && $infoLog$$ ? $stringToUTF8Array$$($log_program$jscomp$71$$, $HEAPU8$$, $infoLog$$, $maxLength_numBytesWrittenExclNull$jscomp$1$$) : 0;
  $length$jscomp$53$$ && ($HEAP32$$[$length$jscomp$53$$ >> 2] = $maxLength_numBytesWrittenExclNull$jscomp$1$$);
}, glGetProgramiv:($log$jscomp$1_program$jscomp$72$$, $i$jscomp$45_pname$jscomp$26$$, $p$jscomp$7$$) => {
  if ($p$jscomp$7$$) {
    if ($log$jscomp$1_program$jscomp$72$$ >= $GL$counter$$) {
      $GL$lastError$$ ||= 1281;
    } else {
      if ($log$jscomp$1_program$jscomp$72$$ = $GL$programs$$[$log$jscomp$1_program$jscomp$72$$], 35716 == $i$jscomp$45_pname$jscomp$26$$) {
        $log$jscomp$1_program$jscomp$72$$ = $GLctx$$.getProgramInfoLog($log$jscomp$1_program$jscomp$72$$), null === $log$jscomp$1_program$jscomp$72$$ && ($log$jscomp$1_program$jscomp$72$$ = "(unknown error)"), $HEAP32$$[$p$jscomp$7$$ >> 2] = $log$jscomp$1_program$jscomp$72$$.length + 1;
      } else if (35719 == $i$jscomp$45_pname$jscomp$26$$) {
        if (!$log$jscomp$1_program$jscomp$72$$.$maxUniformLength$) {
          var $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$72$$, 35718);
          for ($i$jscomp$45_pname$jscomp$26$$ = 0; $i$jscomp$45_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$45_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$72$$.$maxUniformLength$ = Math.max($log$jscomp$1_program$jscomp$72$$.$maxUniformLength$, $GLctx$$.getActiveUniform($log$jscomp$1_program$jscomp$72$$, $i$jscomp$45_pname$jscomp$26$$).name.length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$7$$ >> 2] = $log$jscomp$1_program$jscomp$72$$.$maxUniformLength$;
      } else if (35722 == $i$jscomp$45_pname$jscomp$26$$) {
        if (!$log$jscomp$1_program$jscomp$72$$.$maxAttributeLength$) {
          for ($numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$72$$, 35721), $i$jscomp$45_pname$jscomp$26$$ = 0; $i$jscomp$45_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$45_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$72$$.$maxAttributeLength$ = Math.max($log$jscomp$1_program$jscomp$72$$.$maxAttributeLength$, $GLctx$$.getActiveAttrib($log$jscomp$1_program$jscomp$72$$, $i$jscomp$45_pname$jscomp$26$$).name.length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$7$$ >> 2] = $log$jscomp$1_program$jscomp$72$$.$maxAttributeLength$;
      } else if (35381 == $i$jscomp$45_pname$jscomp$26$$) {
        if (!$log$jscomp$1_program$jscomp$72$$.$maxUniformBlockNameLength$) {
          for ($numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$72$$, 35382), $i$jscomp$45_pname$jscomp$26$$ = 0; $i$jscomp$45_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$45_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$72$$.$maxUniformBlockNameLength$ = Math.max($log$jscomp$1_program$jscomp$72$$.$maxUniformBlockNameLength$, $GLctx$$.getActiveUniformBlockName($log$jscomp$1_program$jscomp$72$$, $i$jscomp$45_pname$jscomp$26$$).length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$7$$ >> 2] = $log$jscomp$1_program$jscomp$72$$.$maxUniformBlockNameLength$;
      } else {
        $HEAP32$$[$p$jscomp$7$$ >> 2] = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$72$$, $i$jscomp$45_pname$jscomp$26$$);
      }
    }
  } else {
    $GL$lastError$$ ||= 1281;
  }
}, glGetShaderInfoLog:($log$jscomp$2_shader$jscomp$15$$, $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$2$$, $length$jscomp$54$$, $infoLog$jscomp$1$$) => {
  $log$jscomp$2_shader$jscomp$15$$ = $GLctx$$.getShaderInfoLog($GL$shaders$$[$log$jscomp$2_shader$jscomp$15$$]);
  null === $log$jscomp$2_shader$jscomp$15$$ && ($log$jscomp$2_shader$jscomp$15$$ = "(unknown error)");
  $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$2$$ = 0 < $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$2$$ && $infoLog$jscomp$1$$ ? $stringToUTF8Array$$($log$jscomp$2_shader$jscomp$15$$, $HEAPU8$$, $infoLog$jscomp$1$$, $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$2$$) : 0;
  $length$jscomp$54$$ && ($HEAP32$$[$length$jscomp$54$$ >> 2] = $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$2$$);
}, glGetShaderiv:($log$jscomp$3_shader$jscomp$16_source$jscomp$18$$, $pname$jscomp$27$$, $p$jscomp$8$$) => {
  $p$jscomp$8$$ ? 35716 == $pname$jscomp$27$$ ? ($log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ = $GLctx$$.getShaderInfoLog($GL$shaders$$[$log$jscomp$3_shader$jscomp$16_source$jscomp$18$$]), null === $log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ && ($log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ = "(unknown error)"), $HEAP32$$[$p$jscomp$8$$ >> 2] = $log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ ? $log$jscomp$3_shader$jscomp$16_source$jscomp$18$$.length + 1 : 0) : 35720 == $pname$jscomp$27$$ ? 
  ($log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ = $GLctx$$.getShaderSource($GL$shaders$$[$log$jscomp$3_shader$jscomp$16_source$jscomp$18$$]), $HEAP32$$[$p$jscomp$8$$ >> 2] = $log$jscomp$3_shader$jscomp$16_source$jscomp$18$$ ? $log$jscomp$3_shader$jscomp$16_source$jscomp$18$$.length + 1 : 0) : $HEAP32$$[$p$jscomp$8$$ >> 2] = $GLctx$$.getShaderParameter($GL$shaders$$[$log$jscomp$3_shader$jscomp$16_source$jscomp$18$$], $pname$jscomp$27$$) : $GL$lastError$$ ||= 1281;
}, glGetString:$name_$$ => {
  var $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $GL$stringCache$$[$name_$$];
  if (!$glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$) {
    switch($name_$$) {
      case 7939:
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $stringToNewUTF8$$($webglGetExtensions$$().join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        ($glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $GLctx$$.getParameter($name_$$)) || ($GL$lastError$$ ||= 1280);
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ ? $stringToNewUTF8$$($glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$) : 0;
        break;
      case 7938:
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $GLctx$$.getParameter(7938);
        var $glVersion_ver_num$$ = `OpenGL ES 2.0 (${$glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$})`;
        2 <= $GL$currentContext$$.version && ($glVersion_ver_num$$ = `OpenGL ES 3.0 (${$glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$})`);
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $stringToNewUTF8$$($glVersion_ver_num$$);
        break;
      case 35724:
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $GLctx$$.getParameter(35724);
        $glVersion_ver_num$$ = $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== $glVersion_ver_num$$ && (3 == $glVersion_ver_num$$[1].length && ($glVersion_ver_num$$[1] += "0"), $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = `OpenGL ES GLSL ES ${$glVersion_ver_num$$[1]} (${$glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$})`);
        $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$ = $stringToNewUTF8$$($glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$);
        break;
      default:
        $GL$lastError$$ ||= 1280;
    }
    $GL$stringCache$$[$name_$$] = $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$;
  }
  return $glslVersion_ret$jscomp$12_s$jscomp$6_webGLVersion$$;
}, glGetUniformLocation:($program$jscomp$74$$, $name$jscomp$119$$) => {
  $name$jscomp$119$$ = $UTF8ToString$$($name$jscomp$119$$);
  if ($program$jscomp$74$$ = $GL$programs$$[$program$jscomp$74$$]) {
    var $program$jscomp$inline_230_uniformLocsById$jscomp$1$$ = $program$jscomp$74$$, $arrayIndex_uniformLocsById$jscomp$inline_231$$ = $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformLocsById$, $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$ = $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformSizeAndIdsByName$, $i$jscomp$inline_233_leftBrace$$;
    if (!$arrayIndex_uniformLocsById$jscomp$inline_231$$) {
      $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformLocsById$ = $arrayIndex_uniformLocsById$jscomp$inline_231$$ = {};
      $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformArrayNamesById$ = {};
      var $numActiveUniforms$jscomp$inline_235$$ = $GLctx$$.getProgramParameter($program$jscomp$inline_230_uniformLocsById$jscomp$1$$, 35718);
      for ($i$jscomp$inline_233_leftBrace$$ = 0; $i$jscomp$inline_233_leftBrace$$ < $numActiveUniforms$jscomp$inline_235$$; ++$i$jscomp$inline_233_leftBrace$$) {
        var $sz$jscomp$inline_238_u$jscomp$inline_236$$ = $GLctx$$.getActiveUniform($program$jscomp$inline_230_uniformLocsById$jscomp$1$$, $i$jscomp$inline_233_leftBrace$$);
        var $j$jscomp$inline_234_nm$jscomp$inline_237$$ = $sz$jscomp$inline_238_u$jscomp$inline_236$$.name;
        $sz$jscomp$inline_238_u$jscomp$inline_236$$ = $sz$jscomp$inline_238_u$jscomp$inline_236$$.size;
        var $arrayName$jscomp$inline_240_lb$jscomp$inline_239$$ = $webglGetLeftBracePos$$($j$jscomp$inline_234_nm$jscomp$inline_237$$);
        $arrayName$jscomp$inline_240_lb$jscomp$inline_239$$ = 0 < $arrayName$jscomp$inline_240_lb$jscomp$inline_239$$ ? $j$jscomp$inline_234_nm$jscomp$inline_237$$.slice(0, $arrayName$jscomp$inline_240_lb$jscomp$inline_239$$) : $j$jscomp$inline_234_nm$jscomp$inline_237$$;
        var $id$jscomp$inline_241$$ = $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformIdCounter$;
        $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformIdCounter$ += $sz$jscomp$inline_238_u$jscomp$inline_236$$;
        $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$[$arrayName$jscomp$inline_240_lb$jscomp$inline_239$$] = [$sz$jscomp$inline_238_u$jscomp$inline_236$$, $id$jscomp$inline_241$$];
        for ($j$jscomp$inline_234_nm$jscomp$inline_237$$ = 0; $j$jscomp$inline_234_nm$jscomp$inline_237$$ < $sz$jscomp$inline_238_u$jscomp$inline_236$$; ++$j$jscomp$inline_234_nm$jscomp$inline_237$$) {
          $arrayIndex_uniformLocsById$jscomp$inline_231$$[$id$jscomp$inline_241$$] = $j$jscomp$inline_234_nm$jscomp$inline_237$$, $program$jscomp$inline_230_uniformLocsById$jscomp$1$$.$uniformArrayNamesById$[$id$jscomp$inline_241$$++] = $arrayName$jscomp$inline_240_lb$jscomp$inline_239$$;
        }
      }
    }
    $program$jscomp$inline_230_uniformLocsById$jscomp$1$$ = $program$jscomp$74$$.$uniformLocsById$;
    $arrayIndex_uniformLocsById$jscomp$inline_231$$ = 0;
    $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$ = $name$jscomp$119$$;
    $i$jscomp$inline_233_leftBrace$$ = $webglGetLeftBracePos$$($name$jscomp$119$$);
    0 < $i$jscomp$inline_233_leftBrace$$ && ($arrayIndex_uniformLocsById$jscomp$inline_231$$ = parseInt($name$jscomp$119$$.slice($i$jscomp$inline_233_leftBrace$$ + 1)) >>> 0, $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$ = $name$jscomp$119$$.slice(0, $i$jscomp$inline_233_leftBrace$$));
    if (($sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$ = $program$jscomp$74$$.$uniformSizeAndIdsByName$[$sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$]) && $arrayIndex_uniformLocsById$jscomp$inline_231$$ < $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$[0] && ($arrayIndex_uniformLocsById$jscomp$inline_231$$ += $sizeAndId_uniformBaseName_uniformSizeAndIdsByName$jscomp$inline_232$$[1], $program$jscomp$inline_230_uniformLocsById$jscomp$1$$[$arrayIndex_uniformLocsById$jscomp$inline_231$$] = 
    $program$jscomp$inline_230_uniformLocsById$jscomp$1$$[$arrayIndex_uniformLocsById$jscomp$inline_231$$] || $GLctx$$.getUniformLocation($program$jscomp$74$$, $name$jscomp$119$$))) {
      return $arrayIndex_uniformLocsById$jscomp$inline_231$$;
    }
  } else {
    $GL$lastError$$ ||= 1281;
  }
  return -1;
}, glLinkProgram:$program$jscomp$75$$ => {
  $program$jscomp$75$$ = $GL$programs$$[$program$jscomp$75$$];
  $GLctx$$.linkProgram($program$jscomp$75$$);
  $program$jscomp$75$$.$uniformLocsById$ = 0;
  $program$jscomp$75$$.$uniformSizeAndIdsByName$ = {};
}, glRenderbufferStorage:($x0$jscomp$13$$, $x1$jscomp$7$$, $x2$jscomp$5$$, $x3$jscomp$2$$) => $GLctx$$.renderbufferStorage($x0$jscomp$13$$, $x1$jscomp$7$$, $x2$jscomp$5$$, $x3$jscomp$2$$), glShaderSource:($shader$jscomp$17$$, $count$jscomp$44$$, $string$jscomp$17$$, $length$jscomp$55$$) => {
  for (var $source$jscomp$inline_248$$ = "", $i$jscomp$inline_249$$ = 0; $i$jscomp$inline_249$$ < $count$jscomp$44$$; ++$i$jscomp$inline_249$$) {
    $source$jscomp$inline_248$$ += $UTF8ToString$$($HEAPU32$$[$string$jscomp$17$$ + 4 * $i$jscomp$inline_249$$ >> 2], $length$jscomp$55$$ ? $HEAPU32$$[$length$jscomp$55$$ + 4 * $i$jscomp$inline_249$$ >> 2] : void 0);
  }
  $GLctx$$.shaderSource($GL$shaders$$[$shader$jscomp$17$$], $source$jscomp$inline_248$$);
}, glTexImage2D:($target$jscomp$106$$, $level$jscomp$20$$, $internalFormat$jscomp$1$$, $width$jscomp$33$$, $height$jscomp$28$$, $border$jscomp$5$$, $format$jscomp$22$$, $type$jscomp$183$$, $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$) => {
  if (2 <= $GL$currentContext$$.version) {
    if ($GLctx$$.$currentPixelUnpackBufferBinding$) {
      $GLctx$$.texImage2D($target$jscomp$106$$, $level$jscomp$20$$, $internalFormat$jscomp$1$$, $width$jscomp$33$$, $height$jscomp$28$$, $border$jscomp$5$$, $format$jscomp$22$$, $type$jscomp$183$$, $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$);
      return;
    }
    if ($JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$) {
      var $heap$jscomp$3_heap$jscomp$inline_256$$ = $heapObjectForWebGLType$$($type$jscomp$183$$);
      $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$ >>>= 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_256$$.BYTES_PER_ELEMENT);
      $GLctx$$.texImage2D($target$jscomp$106$$, $level$jscomp$20$$, $internalFormat$jscomp$1$$, $width$jscomp$33$$, $height$jscomp$28$$, $border$jscomp$5$$, $format$jscomp$22$$, $type$jscomp$183$$, $heap$jscomp$3_heap$jscomp$inline_256$$, $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$);
      return;
    }
  }
  if ($JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$) {
    $heap$jscomp$3_heap$jscomp$inline_256$$ = $heapObjectForWebGLType$$($type$jscomp$183$$);
    var $bytes$jscomp$inline_257$$ = $height$jscomp$28$$ * ($width$jscomp$33$$ * ({5:3, 6:4, 8:2, 29502:3, 29504:4, 26917:2, 26918:2, 29846:3, 29847:4}[$format$jscomp$22$$ - 6402] || 1) * $heap$jscomp$3_heap$jscomp$inline_256$$.BYTES_PER_ELEMENT + 4 - 1 & -4);
    $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$ = $heap$jscomp$3_heap$jscomp$inline_256$$.subarray($JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$ >>> 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_256$$.BYTES_PER_ELEMENT), $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$ + $bytes$jscomp$inline_257$$ >>> 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_256$$.BYTES_PER_ELEMENT));
  } else {
    $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$ = null;
  }
  $GLctx$$.texImage2D($target$jscomp$106$$, $level$jscomp$20$$, $internalFormat$jscomp$1$$, $width$jscomp$33$$, $height$jscomp$28$$, $border$jscomp$5$$, $format$jscomp$22$$, $type$jscomp$183$$, $JSCompiler_temp$jscomp$21_index$jscomp$108_pixels$jscomp$2$$);
}, glTexImage3D:($target$jscomp$107$$, $level$jscomp$21$$, $internalFormat$jscomp$2$$, $width$jscomp$34$$, $height$jscomp$29$$, $depth$jscomp$9$$, $border$jscomp$6$$, $format$jscomp$23$$, $type$jscomp$184$$, $pixels$jscomp$3$$) => {
  if ($GLctx$$.$currentPixelUnpackBufferBinding$) {
    $GLctx$$.texImage3D($target$jscomp$107$$, $level$jscomp$21$$, $internalFormat$jscomp$2$$, $width$jscomp$34$$, $height$jscomp$29$$, $depth$jscomp$9$$, $border$jscomp$6$$, $format$jscomp$23$$, $type$jscomp$184$$, $pixels$jscomp$3$$);
  } else if ($pixels$jscomp$3$$) {
    var $heap$jscomp$4$$ = $heapObjectForWebGLType$$($type$jscomp$184$$);
    $GLctx$$.texImage3D($target$jscomp$107$$, $level$jscomp$21$$, $internalFormat$jscomp$2$$, $width$jscomp$34$$, $height$jscomp$29$$, $depth$jscomp$9$$, $border$jscomp$6$$, $format$jscomp$23$$, $type$jscomp$184$$, $heap$jscomp$4$$, $pixels$jscomp$3$$ >>> 31 - Math.clz32($heap$jscomp$4$$.BYTES_PER_ELEMENT));
  } else {
    $GLctx$$.texImage3D($target$jscomp$107$$, $level$jscomp$21$$, $internalFormat$jscomp$2$$, $width$jscomp$34$$, $height$jscomp$29$$, $depth$jscomp$9$$, $border$jscomp$6$$, $format$jscomp$23$$, $type$jscomp$184$$, null);
  }
}, glTexParameterfv:($target$jscomp$108$$, $pname$jscomp$28$$, $params$jscomp$1$$) => {
  $GLctx$$.texParameterf($target$jscomp$108$$, $pname$jscomp$28$$, $HEAPF32$$[$params$jscomp$1$$ >> 2]);
}, glTexParameteri:($x0$jscomp$14$$, $x1$jscomp$8$$, $x2$jscomp$6$$) => $GLctx$$.texParameteri($x0$jscomp$14$$, $x1$jscomp$8$$, $x2$jscomp$6$$), glUniform1f:($location$jscomp$80$$, $v0$jscomp$16$$) => {
  $GLctx$$.uniform1f($webglGetUniformLocation$$($location$jscomp$80$$), $v0$jscomp$16$$);
}, glUniform1i:($location$jscomp$81$$, $v0$jscomp$17$$) => {
  $GLctx$$.uniform1i($webglGetUniformLocation$$($location$jscomp$81$$), $v0$jscomp$17$$);
}, glUniform2fv:($location$jscomp$82$$, $count$jscomp$45$$, $value$jscomp$127$$) => {
  if (2 <= $GL$currentContext$$.version) {
    $count$jscomp$45$$ && $GLctx$$.uniform2fv($webglGetUniformLocation$$($location$jscomp$82$$), $HEAPF32$$, $value$jscomp$127$$ >> 2, 2 * $count$jscomp$45$$);
  } else {
    if (144 >= $count$jscomp$45$$) {
      $count$jscomp$45$$ *= 2;
      for (var $view$jscomp$8$$ = $miniTempWebGLFloatBuffers$$[$count$jscomp$45$$], $i$jscomp$47$$ = 0; $i$jscomp$47$$ < $count$jscomp$45$$; $i$jscomp$47$$ += 2) {
        $view$jscomp$8$$[$i$jscomp$47$$] = $HEAPF32$$[$value$jscomp$127$$ + 4 * $i$jscomp$47$$ >> 2], $view$jscomp$8$$[$i$jscomp$47$$ + 1] = $HEAPF32$$[$value$jscomp$127$$ + (4 * $i$jscomp$47$$ + 4) >> 2];
      }
    } else {
      $view$jscomp$8$$ = $HEAPF32$$.subarray($value$jscomp$127$$ >> 2, $value$jscomp$127$$ + 8 * $count$jscomp$45$$ >> 2);
    }
    $GLctx$$.uniform2fv($webglGetUniformLocation$$($location$jscomp$82$$), $view$jscomp$8$$);
  }
}, glUniform3f:($location$jscomp$83$$, $v0$jscomp$18$$, $v1$jscomp$12$$, $v2$jscomp$8$$) => {
  $GLctx$$.uniform3f($webglGetUniformLocation$$($location$jscomp$83$$), $v0$jscomp$18$$, $v1$jscomp$12$$, $v2$jscomp$8$$);
}, glUniform3fv:($location$jscomp$84$$, $count$jscomp$46$$, $value$jscomp$128$$) => {
  if (2 <= $GL$currentContext$$.version) {
    $count$jscomp$46$$ && $GLctx$$.uniform3fv($webglGetUniformLocation$$($location$jscomp$84$$), $HEAPF32$$, $value$jscomp$128$$ >> 2, 3 * $count$jscomp$46$$);
  } else {
    if (96 >= $count$jscomp$46$$) {
      $count$jscomp$46$$ *= 3;
      for (var $view$jscomp$9$$ = $miniTempWebGLFloatBuffers$$[$count$jscomp$46$$], $i$jscomp$48$$ = 0; $i$jscomp$48$$ < $count$jscomp$46$$; $i$jscomp$48$$ += 3) {
        $view$jscomp$9$$[$i$jscomp$48$$] = $HEAPF32$$[$value$jscomp$128$$ + 4 * $i$jscomp$48$$ >> 2], $view$jscomp$9$$[$i$jscomp$48$$ + 1] = $HEAPF32$$[$value$jscomp$128$$ + (4 * $i$jscomp$48$$ + 4) >> 2], $view$jscomp$9$$[$i$jscomp$48$$ + 2] = $HEAPF32$$[$value$jscomp$128$$ + (4 * $i$jscomp$48$$ + 8) >> 2];
      }
    } else {
      $view$jscomp$9$$ = $HEAPF32$$.subarray($value$jscomp$128$$ >> 2, $value$jscomp$128$$ + 12 * $count$jscomp$46$$ >> 2);
    }
    $GLctx$$.uniform3fv($webglGetUniformLocation$$($location$jscomp$84$$), $view$jscomp$9$$);
  }
}, glUniform4f:($location$jscomp$85$$, $v0$jscomp$19$$, $v1$jscomp$13$$, $v2$jscomp$9$$, $v3$jscomp$4$$) => {
  $GLctx$$.uniform4f($webglGetUniformLocation$$($location$jscomp$85$$), $v0$jscomp$19$$, $v1$jscomp$13$$, $v2$jscomp$9$$, $v3$jscomp$4$$);
}, glUniform4fv:($location$jscomp$86$$, $count$jscomp$47$$, $value$jscomp$129$$) => {
  if (2 <= $GL$currentContext$$.version) {
    $count$jscomp$47$$ && $GLctx$$.uniform4fv($webglGetUniformLocation$$($location$jscomp$86$$), $HEAPF32$$, $value$jscomp$129$$ >> 2, 4 * $count$jscomp$47$$);
  } else {
    if (72 >= $count$jscomp$47$$) {
      var $view$jscomp$10$$ = $miniTempWebGLFloatBuffers$$[4 * $count$jscomp$47$$], $heap$jscomp$5$$ = $HEAPF32$$;
      $value$jscomp$129$$ >>= 2;
      $count$jscomp$47$$ *= 4;
      for (var $i$jscomp$49$$ = 0; $i$jscomp$49$$ < $count$jscomp$47$$; $i$jscomp$49$$ += 4) {
        var $dst$jscomp$2$$ = $value$jscomp$129$$ + $i$jscomp$49$$;
        $view$jscomp$10$$[$i$jscomp$49$$] = $heap$jscomp$5$$[$dst$jscomp$2$$];
        $view$jscomp$10$$[$i$jscomp$49$$ + 1] = $heap$jscomp$5$$[$dst$jscomp$2$$ + 1];
        $view$jscomp$10$$[$i$jscomp$49$$ + 2] = $heap$jscomp$5$$[$dst$jscomp$2$$ + 2];
        $view$jscomp$10$$[$i$jscomp$49$$ + 3] = $heap$jscomp$5$$[$dst$jscomp$2$$ + 3];
      }
    } else {
      $view$jscomp$10$$ = $HEAPF32$$.subarray($value$jscomp$129$$ >> 2, $value$jscomp$129$$ + 16 * $count$jscomp$47$$ >> 2);
    }
    $GLctx$$.uniform4fv($webglGetUniformLocation$$($location$jscomp$86$$), $view$jscomp$10$$);
  }
}, glUniformMatrix4fv:($location$jscomp$87$$, $count$jscomp$48$$, $transpose$jscomp$21$$, $value$jscomp$130$$) => {
  if (2 <= $GL$currentContext$$.version) {
    $count$jscomp$48$$ && $GLctx$$.uniformMatrix4fv($webglGetUniformLocation$$($location$jscomp$87$$), !!$transpose$jscomp$21$$, $HEAPF32$$, $value$jscomp$130$$ >> 2, 16 * $count$jscomp$48$$);
  } else {
    if (18 >= $count$jscomp$48$$) {
      var $view$jscomp$11$$ = $miniTempWebGLFloatBuffers$$[16 * $count$jscomp$48$$], $heap$jscomp$6$$ = $HEAPF32$$;
      $value$jscomp$130$$ >>= 2;
      $count$jscomp$48$$ *= 16;
      for (var $i$jscomp$50$$ = 0; $i$jscomp$50$$ < $count$jscomp$48$$; $i$jscomp$50$$ += 16) {
        var $dst$jscomp$3$$ = $value$jscomp$130$$ + $i$jscomp$50$$;
        $view$jscomp$11$$[$i$jscomp$50$$] = $heap$jscomp$6$$[$dst$jscomp$3$$];
        $view$jscomp$11$$[$i$jscomp$50$$ + 1] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 1];
        $view$jscomp$11$$[$i$jscomp$50$$ + 2] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 2];
        $view$jscomp$11$$[$i$jscomp$50$$ + 3] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 3];
        $view$jscomp$11$$[$i$jscomp$50$$ + 4] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 4];
        $view$jscomp$11$$[$i$jscomp$50$$ + 5] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 5];
        $view$jscomp$11$$[$i$jscomp$50$$ + 6] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 6];
        $view$jscomp$11$$[$i$jscomp$50$$ + 7] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 7];
        $view$jscomp$11$$[$i$jscomp$50$$ + 8] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 8];
        $view$jscomp$11$$[$i$jscomp$50$$ + 9] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 9];
        $view$jscomp$11$$[$i$jscomp$50$$ + 10] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 10];
        $view$jscomp$11$$[$i$jscomp$50$$ + 11] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 11];
        $view$jscomp$11$$[$i$jscomp$50$$ + 12] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 12];
        $view$jscomp$11$$[$i$jscomp$50$$ + 13] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 13];
        $view$jscomp$11$$[$i$jscomp$50$$ + 14] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 14];
        $view$jscomp$11$$[$i$jscomp$50$$ + 15] = $heap$jscomp$6$$[$dst$jscomp$3$$ + 15];
      }
    } else {
      $view$jscomp$11$$ = $HEAPF32$$.subarray($value$jscomp$130$$ >> 2, $value$jscomp$130$$ + 64 * $count$jscomp$48$$ >> 2);
    }
    $GLctx$$.uniformMatrix4fv($webglGetUniformLocation$$($location$jscomp$87$$), !!$transpose$jscomp$21$$, $view$jscomp$11$$);
  }
}, glUseProgram:$program$jscomp$76$$ => {
  $program$jscomp$76$$ = $GL$programs$$[$program$jscomp$76$$];
  $GLctx$$.useProgram($program$jscomp$76$$);
  $GLctx$$.$currentProgram$ = $program$jscomp$76$$;
}, glVertexAttribPointer:($index$jscomp$109$$, $size$jscomp$38$$, $type$jscomp$185$$, $normalized$jscomp$2$$, $stride$jscomp$3$$, $ptr$jscomp$18$$) => {
  $GLctx$$.vertexAttribPointer($index$jscomp$109$$, $size$jscomp$38$$, $type$jscomp$185$$, !!$normalized$jscomp$2$$, $stride$jscomp$3$$, $ptr$jscomp$18$$);
}, glViewport:($x0$jscomp$15$$, $x1$jscomp$9$$, $x2$jscomp$7$$, $x3$jscomp$3$$) => $GLctx$$.viewport($x0$jscomp$15$$, $x1$jscomp$9$$, $x2$jscomp$7$$, $x3$jscomp$3$$), glfwCreateWindow:($width$jscomp$41_win$jscomp$inline_268$$, $height$jscomp$36$$, $title$jscomp$16$$, $canvas$jscomp$inline_266_monitor$jscomp$2$$) => {
  var $i$jscomp$inline_264$$;
  for ($i$jscomp$inline_264$$ = 0; $i$jscomp$inline_264$$ < $GLFW$windows$$.length && null !== $GLFW$windows$$[$i$jscomp$inline_264$$]; $i$jscomp$inline_264$$++) {
  }
  if (0 < $i$jscomp$inline_264$$) {
    throw "glfwCreateWindow only supports one window at time currently";
  }
  var $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ = $i$jscomp$inline_264$$ + 1;
  if (0 >= $width$jscomp$41_win$jscomp$inline_268$$ || 0 >= $height$jscomp$36$$) {
    $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ = 0;
  } else {
    $canvas$jscomp$inline_266_monitor$jscomp$2$$ ? $Browser$requestFullscreen$$() : $Browser$setCanvasSize$$($width$jscomp$41_win$jscomp$inline_268$$, $height$jscomp$36$$);
    for ($i$jscomp$inline_264$$ = 0; $i$jscomp$inline_264$$ < $GLFW$windows$$.length && null == $GLFW$windows$$[$i$jscomp$inline_264$$]; $i$jscomp$inline_264$$++) {
    }
    $canvas$jscomp$inline_266_monitor$jscomp$2$$ = $Module$$.canvas;
    var $useWebGL$jscomp$inline_267$$ = 0 < $GLFW$hints$$[139265];
    $i$jscomp$inline_264$$ == $GLFW$windows$$.length && ($useWebGL$jscomp$inline_267$$ ? $Browser$createContext$$($canvas$jscomp$inline_266_monitor$jscomp$2$$) : $Browser$init$$());
    !$Module$$.ctx && $useWebGL$jscomp$inline_267$$ ? $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ = 0 : ($width$jscomp$41_win$jscomp$inline_268$$ = new $GLFW_Window$$($JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$, $width$jscomp$41_win$jscomp$inline_268$$, $height$jscomp$36$$, $canvas$jscomp$inline_266_monitor$jscomp$2$$.width, $canvas$jscomp$inline_266_monitor$jscomp$2$$.height, $title$jscomp$16$$), $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ - 1 == $GLFW$windows$$.length ? 
    $GLFW$windows$$.push($width$jscomp$41_win$jscomp$inline_268$$) : $GLFW$windows$$[$JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ - 1] = $width$jscomp$41_win$jscomp$inline_268$$, $GLFW$active$$ = $width$jscomp$41_win$jscomp$inline_268$$, $GLFW$adjustCanvasDimensions$$(), $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$ = $width$jscomp$41_win$jscomp$inline_268$$.id);
  }
  return $JSCompiler_inline_result$jscomp$27_id$jscomp$inline_265$$;
}, glfwDestroyWindow:$JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ => {
  a: {
    if ($JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ = 0 >= $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ || !$GLFW$windows$$ ? null : $GLFW$windows$$[$JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ - 1]) {
      $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$.$windowCloseFunc$ && $wasmTable$$.get($JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$.$windowCloseFunc$)($JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$.id);
      $GLFW$windows$$[$JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$.id - 1] = null;
      $GLFW$active$$.id == $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$.id && ($GLFW$active$$ = null);
      for ($JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ of $GLFW$windows$$) {
        if (null !== $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$) {
          $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ = void 0;
          break a;
        }
      }
      delete $Module$$.ctx;
    }
    $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$ = void 0;
  }
  return $JSCompiler_inline_result$jscomp$28_win$jscomp$inline_271_winid$jscomp$23$$;
}, glfwGetFramebufferSize:($win$jscomp$21_winid$jscomp$24$$, $width$jscomp$42$$, $height$jscomp$37$$) => {
  var $ww$jscomp$1$$ = 0, $wh$jscomp$1$$ = 0;
  if ($win$jscomp$21_winid$jscomp$24$$ = 0 >= $win$jscomp$21_winid$jscomp$24$$ || !$GLFW$windows$$ ? null : $GLFW$windows$$[$win$jscomp$21_winid$jscomp$24$$ - 1]) {
    $ww$jscomp$1$$ = $win$jscomp$21_winid$jscomp$24$$.$framebufferWidth$, $wh$jscomp$1$$ = $win$jscomp$21_winid$jscomp$24$$.$framebufferHeight$;
  }
  $width$jscomp$42$$ && ($HEAP32$$[$width$jscomp$42$$ >> 2] = $ww$jscomp$1$$);
  $height$jscomp$37$$ && ($HEAP32$$[$height$jscomp$37$$ >> 2] = $wh$jscomp$1$$);
}, glfwInit:() => {
  if ($GLFW$windows$$) {
    return 1;
  }
  $GLFW$hints$$ = {...$GLFW$defaultHints$$};
  $GLFW$windows$$ = [];
  $GLFW$active$$ = null;
  $GLFW$scale$$ = $GLFW$getDevicePixelRatio$$();
  window.addEventListener("gamepadconnected", $GLFW$onGamepadConnected$$, !0);
  window.addEventListener("gamepaddisconnected", $GLFW$onGamepadDisconnected$$, !0);
  window.addEventListener("keydown", $GLFW$onKeydown$$, !0);
  window.addEventListener("keypress", $GLFW$onKeyPress$$, !0);
  window.addEventListener("keyup", $GLFW$onKeyup$$, !0);
  window.addEventListener("blur", $GLFW$onBlur$$, !0);
  $GLFW$devicePixelRatioMQL$$ = window.matchMedia("(resolution: " + $GLFW$getDevicePixelRatio$$() + "dppx)");
  $GLFW$devicePixelRatioMQL$$.addEventListener("change", $GLFW$onDevicePixelRatioChange$$);
  var $canvas$jscomp$15$$ = $Module$$.canvas;
  $canvas$jscomp$15$$.addEventListener("touchmove", $GLFW$onMousemove$$, !0);
  $canvas$jscomp$15$$.addEventListener("touchstart", $GLFW$onMouseButtonDown$$, !0);
  $canvas$jscomp$15$$.addEventListener("touchcancel", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$15$$.addEventListener("touchend", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$15$$.addEventListener("mousemove", $GLFW$onMousemove$$, !0);
  $canvas$jscomp$15$$.addEventListener("mousedown", $GLFW$onMouseButtonDown$$, !0);
  $canvas$jscomp$15$$.addEventListener("mouseup", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$15$$.addEventListener("wheel", $GLFW$onMouseWheel$$, !0);
  $canvas$jscomp$15$$.addEventListener("mousewheel", $GLFW$onMouseWheel$$, !0);
  $canvas$jscomp$15$$.addEventListener("mouseenter", $GLFW$onMouseenter$$, !0);
  $canvas$jscomp$15$$.addEventListener("mouseleave", $GLFW$onMouseleave$$, !0);
  $canvas$jscomp$15$$.addEventListener("drop", $GLFW$onDrop$$, !0);
  $canvas$jscomp$15$$.addEventListener("dragover", $GLFW$onDragover$$, !0);
  $Browser$requestFullscreen$$ = $GLFW$requestFullscreen$$;
  $Browser$calculateMouseCoords$$ = $GLFW$calculateMouseCoords$$;
  $Browser$updateCanvasDimensions$$ = $GLFW$updateCanvasDimensions$$;
  $Browser$resizeListeners$$.push(($width$jscomp$43$$, $height$jscomp$38$$) => {
    if ($GLFW$isHiDPIAware$$()) {
      var $canvas$jscomp$16$$ = $Module$$.canvas;
      $GLFW$onCanvasResize$$($canvas$jscomp$16$$.clientWidth, $canvas$jscomp$16$$.clientHeight, $width$jscomp$43$$, $height$jscomp$38$$);
    } else {
      $GLFW$onCanvasResize$$($width$jscomp$43$$, $height$jscomp$38$$, $width$jscomp$43$$, $height$jscomp$38$$);
    }
  });
  return 1;
}, glfwMakeContextCurrent:() => 0, glfwPollEvents:() => 0, glfwSetCursorPosCallback:($win$jscomp$inline_276_winid$jscomp$26$$, $JSCompiler_inline_result$jscomp$25_cbfun$jscomp$10$$) => {
  if ($win$jscomp$inline_276_winid$jscomp$26$$ = 0 >= $win$jscomp$inline_276_winid$jscomp$26$$ || !$GLFW$windows$$ ? null : $GLFW$windows$$[$win$jscomp$inline_276_winid$jscomp$26$$ - 1]) {
    var $prevcbfun$jscomp$inline_277$$ = $win$jscomp$inline_276_winid$jscomp$26$$.$cursorPosFunc$;
    $win$jscomp$inline_276_winid$jscomp$26$$.$cursorPosFunc$ = $JSCompiler_inline_result$jscomp$25_cbfun$jscomp$10$$;
    $JSCompiler_inline_result$jscomp$25_cbfun$jscomp$10$$ = $prevcbfun$jscomp$inline_277$$;
  } else {
    $JSCompiler_inline_result$jscomp$25_cbfun$jscomp$10$$ = null;
  }
  return $JSCompiler_inline_result$jscomp$25_cbfun$jscomp$10$$;
}, glfwSetWindowSize:($win$jscomp$inline_282_winid$jscomp$27$$, $width$jscomp$44$$, $height$jscomp$39$$) => {
  ($win$jscomp$inline_282_winid$jscomp$27$$ = 0 >= $win$jscomp$inline_282_winid$jscomp$27$$ || !$GLFW$windows$$ ? null : $GLFW$windows$$[$win$jscomp$inline_282_winid$jscomp$27$$ - 1]) && $GLFW$active$$.id == $win$jscomp$inline_282_winid$jscomp$27$$.id && $Browser$setCanvasSize$$($width$jscomp$44$$, $height$jscomp$39$$);
}, glfwSwapBuffers:() => {
}, glfwTerminate:() => {
  window.removeEventListener("gamepadconnected", $GLFW$onGamepadConnected$$, !0);
  window.removeEventListener("gamepaddisconnected", $GLFW$onGamepadDisconnected$$, !0);
  window.removeEventListener("keydown", $GLFW$onKeydown$$, !0);
  window.removeEventListener("keypress", $GLFW$onKeyPress$$, !0);
  window.removeEventListener("keyup", $GLFW$onKeyup$$, !0);
  window.removeEventListener("blur", $GLFW$onBlur$$, !0);
  var $canvas$jscomp$17$$ = $Module$$.canvas;
  $canvas$jscomp$17$$.removeEventListener("touchmove", $GLFW$onMousemove$$, !0);
  $canvas$jscomp$17$$.removeEventListener("touchstart", $GLFW$onMouseButtonDown$$, !0);
  $canvas$jscomp$17$$.removeEventListener("touchcancel", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$17$$.removeEventListener("touchend", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mousemove", $GLFW$onMousemove$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mousedown", $GLFW$onMouseButtonDown$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mouseup", $GLFW$onMouseButtonUp$$, !0);
  $canvas$jscomp$17$$.removeEventListener("wheel", $GLFW$onMouseWheel$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mousewheel", $GLFW$onMouseWheel$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mouseenter", $GLFW$onMouseenter$$, !0);
  $canvas$jscomp$17$$.removeEventListener("mouseleave", $GLFW$onMouseleave$$, !0);
  $canvas$jscomp$17$$.removeEventListener("drop", $GLFW$onDrop$$, !0);
  $canvas$jscomp$17$$.removeEventListener("dragover", $GLFW$onDragover$$, !0);
  $GLFW$devicePixelRatioMQL$$ && $GLFW$devicePixelRatioMQL$$.removeEventListener("change", $GLFW$onDevicePixelRatioChange$$);
  $canvas$jscomp$17$$.width = $canvas$jscomp$17$$.height = 1;
  $GLFW$active$$ = $GLFW$windows$$ = null;
}, glfwWindowHint:($target$jscomp$109$$, $hint$$) => {
  $GLFW$hints$$[$target$jscomp$109$$] = $hint$$;
}, invoke_ii:$invoke_ii$$, invoke_iii:$invoke_iii$$, invoke_iiii:$invoke_iiii$$, invoke_iiiiii:$invoke_iiiiii$$, invoke_vi:$invoke_vi$$, invoke_vii:$invoke_vii$$, invoke_viiii:$invoke_viiii$$, invoke_viiiii:$invoke_viiiii$$, invoke_viiiiii:$invoke_viiiiii$$, random_get:function($buffer$jscomp$44$$, $size$jscomp$39$$) {
  try {
    return $randomFill$$($HEAPU8$$.subarray($buffer$jscomp$44$$, $buffer$jscomp$44$$ + $size$jscomp$39$$)), 0;
  } catch ($e$jscomp$45$$) {
    if ("undefined" == typeof $FS$$ || "ErrnoError" !== $e$jscomp$45$$.name) {
      throw $e$jscomp$45$$;
    }
    return $e$jscomp$45$$.$errno$;
  }
}}, $wasmExports$$;
(async function() {
  function $receiveInstance$$($instance$jscomp$1_wasmExports$jscomp$inline_284$$) {
    $wasmExports$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.exports;
    $wasmMemory$$ = $wasmExports$$.memory;
    $updateMemoryViews$$();
    $wasmTable$$ = $wasmExports$$.__indirect_function_table;
    $instance$jscomp$1_wasmExports$jscomp$inline_284$$ = $wasmExports$$;
    $Module$$._resizeCanvas = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.resizeCanvas;
    $Module$$._getCanvasSize = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.getCanvasSize;
    $Module$$._pauseMainLoop = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.pauseMainLoop;
    $Module$$._resumeMainLoop = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.resumeMainLoop;
    $Module$$._isMainLoopPaused = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.isMainLoopPaused;
    $Module$$._main = $_main$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.main;
    $_free$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.free;
    $_malloc$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.malloc;
    $_setThrew$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.setThrew;
    $__emscripten_stack_restore$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$._emscripten_stack_restore;
    $_emscripten_stack_get_current$$ = $instance$jscomp$1_wasmExports$jscomp$inline_284$$.emscripten_stack_get_current;
    $removeRunDependency$$("wasm-instantiate");
    return $wasmExports$$;
  }
  $addRunDependency$$("wasm-instantiate");
  var $info$$ = {env:$wasmImports$$, wasi_snapshot_preview1:$wasmImports$$};
  if ($Module$$.instantiateWasm) {
    return new Promise($resolve$jscomp$1$$ => {
      $Module$$.instantiateWasm($info$$, ($mod$$, $inst$$) => {
        $resolve$jscomp$1$$($receiveInstance$$($mod$$, $inst$$));
      });
    });
  }
  $wasmBinaryFile$$ ??= $Module$$.locateFile ? $Module$$.locateFile("CSEngineWeb.wasm", $scriptDirectory$$) : $scriptDirectory$$ + "CSEngineWeb.wasm";
  return $receiveInstance$$((await $instantiateAsync$$($info$$)).instance);
})();
function $invoke_ii$$($index$jscomp$110$$, $a1$$) {
  var $sp$$ = $_emscripten_stack_get_current$$();
  try {
    return $wasmTable$$.get($index$jscomp$110$$)($a1$$);
  } catch ($e$jscomp$46$$) {
    $__emscripten_stack_restore$$($sp$$);
    if ($e$jscomp$46$$ !== $e$jscomp$46$$ + 0) {
      throw $e$jscomp$46$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_iii$$($index$jscomp$111$$, $a1$jscomp$1$$, $a2$$) {
  var $sp$jscomp$1$$ = $_emscripten_stack_get_current$$();
  try {
    return $wasmTable$$.get($index$jscomp$111$$)($a1$jscomp$1$$, $a2$$);
  } catch ($e$jscomp$47$$) {
    $__emscripten_stack_restore$$($sp$jscomp$1$$);
    if ($e$jscomp$47$$ !== $e$jscomp$47$$ + 0) {
      throw $e$jscomp$47$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_vi$$($index$jscomp$112$$, $a1$jscomp$2$$) {
  var $sp$jscomp$2$$ = $_emscripten_stack_get_current$$();
  try {
    $wasmTable$$.get($index$jscomp$112$$)($a1$jscomp$2$$);
  } catch ($e$jscomp$48$$) {
    $__emscripten_stack_restore$$($sp$jscomp$2$$);
    if ($e$jscomp$48$$ !== $e$jscomp$48$$ + 0) {
      throw $e$jscomp$48$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_vii$$($index$jscomp$113$$, $a1$jscomp$3$$, $a2$jscomp$1$$) {
  var $sp$jscomp$3$$ = $_emscripten_stack_get_current$$();
  try {
    $wasmTable$$.get($index$jscomp$113$$)($a1$jscomp$3$$, $a2$jscomp$1$$);
  } catch ($e$jscomp$49$$) {
    $__emscripten_stack_restore$$($sp$jscomp$3$$);
    if ($e$jscomp$49$$ !== $e$jscomp$49$$ + 0) {
      throw $e$jscomp$49$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_iiiiii$$($index$jscomp$114$$, $a1$jscomp$4$$, $a2$jscomp$2$$, $a3$$, $a4$$, $a5$$) {
  var $sp$jscomp$4$$ = $_emscripten_stack_get_current$$();
  try {
    return $wasmTable$$.get($index$jscomp$114$$)($a1$jscomp$4$$, $a2$jscomp$2$$, $a3$$, $a4$$, $a5$$);
  } catch ($e$jscomp$50$$) {
    $__emscripten_stack_restore$$($sp$jscomp$4$$);
    if ($e$jscomp$50$$ !== $e$jscomp$50$$ + 0) {
      throw $e$jscomp$50$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_iiii$$($index$jscomp$115$$, $a1$jscomp$5$$, $a2$jscomp$3$$, $a3$jscomp$1$$) {
  var $sp$jscomp$5$$ = $_emscripten_stack_get_current$$();
  try {
    return $wasmTable$$.get($index$jscomp$115$$)($a1$jscomp$5$$, $a2$jscomp$3$$, $a3$jscomp$1$$);
  } catch ($e$jscomp$51$$) {
    $__emscripten_stack_restore$$($sp$jscomp$5$$);
    if ($e$jscomp$51$$ !== $e$jscomp$51$$ + 0) {
      throw $e$jscomp$51$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_viiii$$($index$jscomp$116$$, $a1$jscomp$6$$, $a2$jscomp$4$$, $a3$jscomp$2$$, $a4$jscomp$1$$) {
  var $sp$jscomp$6$$ = $_emscripten_stack_get_current$$();
  try {
    $wasmTable$$.get($index$jscomp$116$$)($a1$jscomp$6$$, $a2$jscomp$4$$, $a3$jscomp$2$$, $a4$jscomp$1$$);
  } catch ($e$jscomp$52$$) {
    $__emscripten_stack_restore$$($sp$jscomp$6$$);
    if ($e$jscomp$52$$ !== $e$jscomp$52$$ + 0) {
      throw $e$jscomp$52$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_viiiii$$($index$jscomp$117$$, $a1$jscomp$7$$, $a2$jscomp$5$$, $a3$jscomp$3$$, $a4$jscomp$2$$, $a5$jscomp$1$$) {
  var $sp$jscomp$7$$ = $_emscripten_stack_get_current$$();
  try {
    $wasmTable$$.get($index$jscomp$117$$)($a1$jscomp$7$$, $a2$jscomp$5$$, $a3$jscomp$3$$, $a4$jscomp$2$$, $a5$jscomp$1$$);
  } catch ($e$jscomp$53$$) {
    $__emscripten_stack_restore$$($sp$jscomp$7$$);
    if ($e$jscomp$53$$ !== $e$jscomp$53$$ + 0) {
      throw $e$jscomp$53$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $invoke_viiiiii$$($index$jscomp$118$$, $a1$jscomp$8$$, $a2$jscomp$6$$, $a3$jscomp$4$$, $a4$jscomp$3$$, $a5$jscomp$2$$, $a6$$) {
  var $sp$jscomp$8$$ = $_emscripten_stack_get_current$$();
  try {
    $wasmTable$$.get($index$jscomp$118$$)($a1$jscomp$8$$, $a2$jscomp$6$$, $a3$jscomp$4$$, $a4$jscomp$3$$, $a5$jscomp$2$$, $a6$$);
  } catch ($e$jscomp$54$$) {
    $__emscripten_stack_restore$$($sp$jscomp$8$$);
    if ($e$jscomp$54$$ !== $e$jscomp$54$$ + 0) {
      throw $e$jscomp$54$$;
    }
    $_setThrew$$(1, 0);
  }
}
function $run$$() {
  function $doRun$$() {
    $Module$$.calledRun = !0;
    if (!$ABORT$$) {
      if (!$Module$$.noFSInit && !$FS$initialized$$) {
        var $input$jscomp$inline_368_input$jscomp$inline_371$$, $output$jscomp$inline_369_output$jscomp$inline_372$$;
        $FS$initialized$$ = !0;
        $input$jscomp$inline_368_input$jscomp$inline_371$$ ??= $Module$$.stdin;
        $output$jscomp$inline_369_output$jscomp$inline_372$$ ??= $Module$$.stdout;
        $entryFunction$jscomp$inline_307_error$jscomp$inline_370_error$jscomp$inline_373$$ ??= $Module$$.stderr;
        $input$jscomp$inline_368_input$jscomp$inline_371$$ ? $FS$createDevice$$("/dev", "stdin", $input$jscomp$inline_368_input$jscomp$inline_371$$) : $FS$symlink$$("/dev/tty", "/dev/stdin");
        $output$jscomp$inline_369_output$jscomp$inline_372$$ ? $FS$createDevice$$("/dev", "stdout", null, $output$jscomp$inline_369_output$jscomp$inline_372$$) : $FS$symlink$$("/dev/tty", "/dev/stdout");
        $entryFunction$jscomp$inline_307_error$jscomp$inline_370_error$jscomp$inline_373$$ ? $FS$createDevice$$("/dev", "stderr", null, $entryFunction$jscomp$inline_307_error$jscomp$inline_370_error$jscomp$inline_373$$) : $FS$symlink$$("/dev/tty1", "/dev/stderr");
        $FS$open$$("/dev/stdin", 0);
        $FS$open$$("/dev/stdout", 1);
        $FS$open$$("/dev/stderr", 1);
      }
      $wasmExports$$.__wasm_call_ctors();
      $FS$ignorePermissions$$ = !1;
      $Module$$.onRuntimeInitialized?.();
      if (!$Module$$.noInitialRun) {
        var $entryFunction$jscomp$inline_307_error$jscomp$inline_370_error$jscomp$inline_373$$ = $_main$$;
        try {
          var $cb$jscomp$inline_377_status$jscomp$inline_375$$ = $entryFunction$jscomp$inline_307_error$jscomp$inline_370_error$jscomp$inline_373$$(0, 0);
          $EXITSTATUS$$ = $cb$jscomp$inline_377_status$jscomp$inline_375$$;
          $_proc_exit$$($cb$jscomp$inline_377_status$jscomp$inline_375$$);
        } catch ($e$jscomp$inline_309$$) {
          $handleException$$($e$jscomp$inline_309$$);
        }
      }
      if ($Module$$.postRun) {
        for ("function" == typeof $Module$$.postRun && ($Module$$.postRun = [$Module$$.postRun]); $Module$$.postRun.length;) {
          $cb$jscomp$inline_377_status$jscomp$inline_375$$ = $Module$$.postRun.shift(), $onPostRuns$$.push($cb$jscomp$inline_377_status$jscomp$inline_375$$);
        }
      }
      $callRuntimeCallbacks$$($onPostRuns$$);
    }
  }
  if (0 < $runDependencies$$) {
    $dependenciesFulfilled$$ = $run$$;
  } else {
    if ($Module$$.preRun) {
      for ("function" == typeof $Module$$.preRun && ($Module$$.preRun = [$Module$$.preRun]); $Module$$.preRun.length;) {
        $addOnPreRun$$();
      }
    }
    $callRuntimeCallbacks$$($onPreRuns$$);
    0 < $runDependencies$$ ? $dependenciesFulfilled$$ = $run$$ : $Module$$.setStatus ? ($Module$$.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => $Module$$.setStatus(""), 1);
      $doRun$$();
    }, 1)) : $doRun$$();
  }
}
if ($Module$$.preInit) {
  for ("function" == typeof $Module$$.preInit && ($Module$$.preInit = [$Module$$.preInit]); 0 < $Module$$.preInit.length;) {
    $Module$$.preInit.shift()();
  }
}
$run$$();

