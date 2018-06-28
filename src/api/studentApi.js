import $ from 'jquery';

class studentApi {
  static fetchStudentData() {
    return new Promise((resolve, reject) => {
      let request = $.ajax({
        url: 'https://api.myjson.com/bins/1dlper',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      request.done(function(responseData) {
        resolve(Object.assign([], responseData));
      });
      request.fail(function(jqXHR, textStatus) {
        if (jqXHR.responseJSON !== undefined && jqXHR.responseJSON !== null) {
          reject(jqXHR.responseJSON);
        } else if (
          jqXHR.responseText !== undefined &&
          jqXHR.responseText !== null
        ) {
          reject(jqXHR.responseText);
        } else {
          reject({ message: textStatus });
        }
      });
    });
  }
}

export default studentApi;
