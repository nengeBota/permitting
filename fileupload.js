// (function (upload()) {
//     upload().fn.uploader = function (options) {
//       var settings = upload().extend(
//         {
//           MessageAreaText: "No files selected.",
//           MessageAreaTextWithFiles: "File List:",
//           DefaultErrorMessage: "Unable to open this file.",
//           BadTypeErrorMessage: "We cannot accept this file type at this time.",
//           acceptedFileTypes: [
//             "pdf",
//             "jpg",
//             "gif",
//             "jpeg",
//             "bmp",
//             "tif",
//             "tiff",
//             "png",
//             "xps",
//             "doc",
//             "docx",
//             "fax",
//             "wmp",
//             "ico",
//             "txt",
//             "cs",
//             "rtf",
//             "xls",
//             "xlsx"
//           ]
//         },
//         options
//       );
  
//       var uploadId = 1;
//       //update the messaging
//       upload()(".file-uploader__message-area p").text(
//         options.MessageAreaText || settings.MessageAreaText
//       );
  
//       //create and add the file list and the hidden input list
//       var fileList = upload()('<ul class="file-list"></ul>');
//       var hiddenInputs = upload()('<div class="hidden-inputs hidden"></div>');
//       upload()(".file-uploader__message-area").after(fileList);
//       upload()(".file-list").after(hiddenInputs);
  
//       //when choosing a file, add the name to the list and copy the file input into the hidden inputs
//       upload()(".file-chooser__input").on("change", function () {
//         var files = document.querySelector(".file-chooser__input").files;
  
//         for (var i = 0; i < files.length; i++) {
//           console.log(files[i]);
  
//           var file = files[i];
//           var fileName = file.name.match(/([^\\\/]+)upload()/)[0];
  
//           //clear any error condition
//           upload()(".file-chooser").removeClass("error");
//           upload()(".error-message").remove();
  
//           //validate the file
//           var check = checkFile(fileName);
//           if (check === "valid") {
//             // move the 'real' one to hidden list
//             upload()(".hidden-inputs").append(upload()(".file-chooser__input"));
  
//             //insert a clone after the hiddens (copy the event handlers too)
//             upload()(".file-chooser").append(
//               upload()(".file-chooser__input").clone({ withDataAndEvents: true })
//             );
  
//             //add the name and a remove button to the file-list
//             upload()(".file-list").append(
//               '<li style="display: none;"><span class="file-list__name">' +
//                 fileName +
//                 '</span><button class="removal-button" data-uploadid="' +
//                 uploadId +
//                 '"></button></li>'
//             );
//             upload()(".file-list").find("li:last").show(800);
  
//             //removal button handler
//             upload()(".removal-button").on("click", function (e) {
//               e.preventDefault();
  
//               //remove the corresponding hidden input
//               upload()(
//                 '.hidden-inputs input[data-uploadid="' +
//                   upload()(this).data("uploadid") +
//                   '"]'
//               ).remove();
  
//               //remove the name from file-list that corresponds to the button clicked
//               upload()(this)
//                 .parent()
//                 .hide("puff")
//                 .delay(10)
//                 .queue(function () {
//                   upload()(this).remove();
//                 });
  
//               //if the list is now empty, change the text back
//               if (upload()(".file-list li").length === 0) {
//                 upload()(".file-uploader__message-area").text(
//                   options.MessageAreaText || settings.MessageAreaText
//                 );
//               }
//             });
  
//             //so the event handler works on the new "real" one
//             upload()(".hidden-inputs .file-chooser__input")
//               .removeClass("file-chooser__input")
//               .attr("data-uploadId", uploadId);
  
//             //update the message area
//             upload()(".file-uploader__message-area").text(
//               options.MessageAreaTextWithFiles ||
//                 settings.MessageAreaTextWithFiles
//             );
  
//             uploadId++;
//           } else {
//             //indicate that the file is not ok
//             upload()(".file-chooser").addClass("error");
//             var errorText =
//               options.DefaultErrorMessage || settings.DefaultErrorMessage;
  
//             if (check === "badFileName") {
//               errorText =
//                 options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
//             }
  
//             upload()(".file-chooser__input").after(
//               '<p class="error-message">' + errorText + "</p>"
//             );
//           }
//         }
//       });
  
//       var checkFile = function (fileName) {
//         var accepted = "invalid",
//           acceptedFileTypes =
//             this.acceptedFileTypes || settings.acceptedFileTypes,
//           regex;
  
//         for (var i = 0; i < acceptedFileTypes.length; i++) {
//           regex = new RegExp("\\." + acceptedFileTypes[i] + "upload()", "i");
  
//           if (regex.test(fileName)) {
//             accepted = "valid";
//             break;
//           } else {
//             accepted = "badFileName";
//           }
//         }
  
//         return accepted;
//       };
//     };
//   })(upload());
  
//   //init
//   upload()(document).ready(function () {
//     console.log("hi");
//     upload()(".fileUploader").uploader({
//       MessageAreaText: "No files selected. Please select a file."
//     });
//   });
  


  // (function() {
  //   window.requestAnimFrame = (function(callback) {
  //     return window.requestAnimationFrame ||
  //       window.webkitRequestAnimationFrame ||
  //       window.mozRequestAnimationFrame ||
  //       window.oRequestAnimationFrame ||
  //       window.msRequestAnimaitonFrame ||
  //       function(callback) {
  //         window.setTimeout(callback, 1000 / 60);
  //       };
  //   })();
  
  //   var canvas = document.getElementById("sig-canvas");
  //   var ctx = canvas.getContext("2d");
  //   ctx.strokeStyle = "#222222";
  //   ctx.lineWidth = 4;
  
  //   var drawing = false;
  //   var mousePos = {
  //     x: 0,
  //     y: 0
  //   };
  //   var lastPos = mousePos;
  
  //   canvas.addEventListener("mousedown", function(e) {
  //     drawing = true;
  //     lastPos = getMousePos(canvas, e);
  //   }, false);
  
  //   canvas.addEventListener("mouseup", function(e) {
  //     drawing = false;
  //   }, false);
  
  //   canvas.addEventListener("mousemove", function(e) {
  //     mousePos = getMousePos(canvas, e);
  //   }, false);
  
  //   // Add touch event support for mobile
  //   canvas.addEventListener("touchstart", function(e) {
  
  //   }, false);
  
  //   canvas.addEventListener("touchmove", function(e) {
  //     var touch = e.touches[0];
  //     var me = new MouseEvent("mousemove", {
  //       clientX: touch.clientX,
  //       clientY: touch.clientY
  //     });
  //     canvas.dispatchEvent(me);
  //   }, false);
  
  //   canvas.addEventListener("touchstart", function(e) {
  //     mousePos = getTouchPos(canvas, e);
  //     var touch = e.touches[0];
  //     var me = new MouseEvent("mousedown", {
  //       clientX: touch.clientX,
  //       clientY: touch.clientY
  //     });
  //     canvas.dispatchEvent(me);
  //   }, false);
  
  //   canvas.addEventListener("touchend", function(e) {
  //     var me = new MouseEvent("mouseup", {});
  //     canvas.dispatchEvent(me);
  //   }, false);
  
  //   function getMousePos(canvasDom, mouseEvent) {
  //     var rect = canvasDom.getBoundingClientRect();
  //     return {
  //       x: mouseEvent.clientX - rect.left,
  //       y: mouseEvent.clientY - rect.top
  //     }
  //   }
  
  //   function getTouchPos(canvasDom, touchEvent) {
  //     var rect = canvasDom.getBoundingClientRect();
  //     return {
  //       x: touchEvent.touches[0].clientX - rect.left,
  //       y: touchEvent.touches[0].clientY - rect.top
  //     }
  //   }
  
  //   function renderCanvas() {
  //     if (drawing) {
  //       ctx.moveTo(lastPos.x, lastPos.y);
  //       ctx.lineTo(mousePos.x, mousePos.y);
  //       ctx.stroke();
  //       lastPos = mousePos;
  //     }
  //   }
  
  //   // Prevent scrolling when touching the canvas
  //   document.body.addEventListener("touchstart", function(e) {
  //     if (e.target == canvas) {
  //       e.preventDefault();
  //     }
  //   }, false);
  //   document.body.addEventListener("touchend", function(e) {
  //     if (e.target == canvas) {
  //       e.preventDefault();
  //     }
  //   }, false);
  //   document.body.addEventListener("touchmove", function(e) {
  //     if (e.target == canvas) {
  //       e.preventDefault();
  //     }
  //   }, false);
  
  //   (function drawLoop() {
  //     requestAnimFrame(drawLoop);
  //     renderCanvas();
  //   })();
  
  //   function clearCanvas() {
  //     canvas.width = canvas.width;
  //   }
  
  //   // Set up the UI
  //   var sigText = document.getElementById("sig-dataUrl");
  //   var sigImage = document.getElementById("sig-image");
  //   var clearBtn = document.getElementById("sig-clearBtn");
  //   var submitBtn = document.getElementById("sig-submitBtn");
  //   clearBtn.addEventListener("click", function(e) {
  //     clearCanvas();
  //     sigText.innerHTML = "Data URL for your signature will go here!";
  //     sigImage.setAttribute("src", "");
  //   }, false);
  //   submitBtn.addEventListener("click", function(e) {
  //     var dataUrl = canvas.toDataURL();
  //     sigText.innerHTML = dataUrl;
  //     sigImage.setAttribute("src", dataUrl);
  //   }, false);
  
  // })();

  var wrapper = document.getElementById("signature-pad"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;

var signaturePad = new SignaturePad(canvas);
signaturePad.minWidth = 1; //minimale Breite des Stiftes
signaturePad.maxWidth = 5; //maximale Breite des Stiftes
signaturePad.penColor = "#000000"; //Stiftfarbe
signaturePad.backgroundColor = "#FFFFFF"; 

function resizeCanvas() {
  var oldContent = signaturePad.toData();
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
  signaturePad.clear();
  signaturePad.fromData(oldContent);
}

window.onresize = resizeCanvas;
resizeCanvas();

function submitForm() {
  //Unterschrift in verstecktes Feld übernehmen
  document.getElementById('signature').value = signaturePad.toDataURL();
}