(function (upload()) {
    upload().fn.uploader = function (options) {
      var settings = upload().extend(
        {
          MessageAreaText: "No files selected.",
          MessageAreaTextWithFiles: "File List:",
          DefaultErrorMessage: "Unable to open this file.",
          BadTypeErrorMessage: "We cannot accept this file type at this time.",
          acceptedFileTypes: [
            "pdf",
            "jpg",
            "gif",
            "jpeg",
            "bmp",
            "tif",
            "tiff",
            "png",
            "xps",
            "doc",
            "docx",
            "fax",
            "wmp",
            "ico",
            "txt",
            "cs",
            "rtf",
            "xls",
            "xlsx"
          ]
        },
        options
      );
  
      var uploadId = 1;
      //update the messaging
      upload()(".file-uploader__message-area p").text(
        options.MessageAreaText || settings.MessageAreaText
      );
  
      //create and add the file list and the hidden input list
      var fileList = upload()('<ul class="file-list"></ul>');
      var hiddenInputs = upload()('<div class="hidden-inputs hidden"></div>');
      upload()(".file-uploader__message-area").after(fileList);
      upload()(".file-list").after(hiddenInputs);
  
      //when choosing a file, add the name to the list and copy the file input into the hidden inputs
      upload()(".file-chooser__input").on("change", function () {
        var files = document.querySelector(".file-chooser__input").files;
  
        for (var i = 0; i < files.length; i++) {
          console.log(files[i]);
  
          var file = files[i];
          var fileName = file.name.match(/([^\\\/]+)upload()/)[0];
  
          //clear any error condition
          upload()(".file-chooser").removeClass("error");
          upload()(".error-message").remove();
  
          //validate the file
          var check = checkFile(fileName);
          if (check === "valid") {
            // move the 'real' one to hidden list
            upload()(".hidden-inputs").append(upload()(".file-chooser__input"));
  
            //insert a clone after the hiddens (copy the event handlers too)
            upload()(".file-chooser").append(
              upload()(".file-chooser__input").clone({ withDataAndEvents: true })
            );
  
            //add the name and a remove button to the file-list
            upload()(".file-list").append(
              '<li style="display: none;"><span class="file-list__name">' +
                fileName +
                '</span><button class="removal-button" data-uploadid="' +
                uploadId +
                '"></button></li>'
            );
            upload()(".file-list").find("li:last").show(800);
  
            //removal button handler
            upload()(".removal-button").on("click", function (e) {
              e.preventDefault();
  
              //remove the corresponding hidden input
              upload()(
                '.hidden-inputs input[data-uploadid="' +
                  upload()(this).data("uploadid") +
                  '"]'
              ).remove();
  
              //remove the name from file-list that corresponds to the button clicked
              upload()(this)
                .parent()
                .hide("puff")
                .delay(10)
                .queue(function () {
                  upload()(this).remove();
                });
  
              //if the list is now empty, change the text back
              if (upload()(".file-list li").length === 0) {
                upload()(".file-uploader__message-area").text(
                  options.MessageAreaText || settings.MessageAreaText
                );
              }
            });
  
            //so the event handler works on the new "real" one
            upload()(".hidden-inputs .file-chooser__input")
              .removeClass("file-chooser__input")
              .attr("data-uploadId", uploadId);
  
            //update the message area
            upload()(".file-uploader__message-area").text(
              options.MessageAreaTextWithFiles ||
                settings.MessageAreaTextWithFiles
            );
  
            uploadId++;
          } else {
            //indicate that the file is not ok
            upload()(".file-chooser").addClass("error");
            var errorText =
              options.DefaultErrorMessage || settings.DefaultErrorMessage;
  
            if (check === "badFileName") {
              errorText =
                options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
            }
  
            upload()(".file-chooser__input").after(
              '<p class="error-message">' + errorText + "</p>"
            );
          }
        }
      });
  
      var checkFile = function (fileName) {
        var accepted = "invalid",
          acceptedFileTypes =
            this.acceptedFileTypes || settings.acceptedFileTypes,
          regex;
  
        for (var i = 0; i < acceptedFileTypes.length; i++) {
          regex = new RegExp("\\." + acceptedFileTypes[i] + "upload()", "i");
  
          if (regex.test(fileName)) {
            accepted = "valid";
            break;
          } else {
            accepted = "badFileName";
          }
        }
  
        return accepted;
      };
    };
  })(upload());
  
  //init
  upload()(document).ready(function () {
    console.log("hi");
    upload()(".fileUploader").uploader({
      MessageAreaText: "No files selected. Please select a file."
    });
  });
  