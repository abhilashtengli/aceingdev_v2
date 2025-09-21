import { useState, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import { cn, type ClassNameProp } from "@/lib/utils";

// Tabler Icons as SVG components
const UploadIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const CloudUploadIcon = () => (
  <svg
    className="text-muted-foreground h-12 w-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v8"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    className="h-5 w-5 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

interface FileItem {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: "uploading" | "completed" | "error";
}

export function FileUploadManager({ className }: ClassNameProp) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, progress: 100, status: "completed" } : f,
          ),
        );
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress } : f)),
        );
      }
    }, 200);
  };

  const handleFiles = useCallback((fileList: FileList) => {
    const newFiles: FileItem[] = Array.from(fileList).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading" as const,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload for each file
    newFiles.forEach((file) => {
      simulateUpload(file.id);
    });
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      if (e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        handleFiles(e.target.files);
      }
    },
    [handleFiles],
  );

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const previewFile = (fileName: string) => {
    // In a real app, this would open a preview modal
    alert(`Preview: ${fileName}`);
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl rounded-xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <UploadIcon />
        <h2 className="text-foreground text-2xl font-bold">Upload Files</h2>
      </div>

      {/* Upload Area */}
      <div
        className={`relative cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
          isDragOver
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            : "border-slate-300 hover:border-blue-400 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800/50"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileInput}
        />

        <div className="flex flex-col items-center gap-4">
          <CloudUploadIcon />
          <div>
            <p className="text-foreground mb-1 text-lg font-medium">
              Drag & drop files here or click to browse
            </p>
            <p className="text-muted-foreground text-sm">
              Support for multiple file types
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-8 space-y-3">
          <h3 className="text-foreground mb-4 text-lg font-semibold">
            Uploaded Files
          </h3>
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
            >
              <FileIcon />

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-foreground truncate text-sm font-medium">
                    {file.name}
                  </p>
                  <span className="text-muted-foreground ml-2 text-xs">
                    {formatFileSize(file.size)}
                  </span>
                </div>

                {file.status === "uploading" && (
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                )}

                {file.status === "completed" && (
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-green-100 dark:bg-green-900/30">
                      <div className="h-2 w-full rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">
                      Complete
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => previewFile(file.name)}
                  className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                >
                  <EyeIcon />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(file.id)}
                  className="h-8 w-8 p-0 text-red-600 hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900/30"
                >
                  <XIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
