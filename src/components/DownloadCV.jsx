import React from 'react';

  const DownloadCV = ({ cvId }) => {
    const downloadCv = () => {
      fetch('http://localhost:8080/download?cv_id=' + cvId)
        .then(response => {
          response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = `CV_${cvId}.pdf`;
            a.click();
          });
      });
    }
    
    return (
      <a href="#" onClick={downloadCv}>Download</a>
    )
  }
  
  export default DownloadCV;