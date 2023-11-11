export type Extension = 'doc' | 'docx' | 'xls' | 'xlsx' | 'pdf' | 'png' | 'jpeg' | 'jpg' | 'gif';
export interface FileUploadProps {
    onFileUpload: (f: File[] | FileList) => void;
    multiple?: boolean;
    allowedExtensions?: Extension[];
    width?: number;
    className?: string;
}
