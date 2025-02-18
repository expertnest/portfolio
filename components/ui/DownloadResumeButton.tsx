// components/DownloadResumeButton.tsx
"use client";

 

export default function DownloadResumeButton() {
  const handleDownload = () => {
    // This navigates to the file in the public folder
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My_Resume.pdf"; // Set the file name for the download
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-black text-white rounded hover:bg-blue-700"
    >
      Download Resume
    </button>
  );
}
