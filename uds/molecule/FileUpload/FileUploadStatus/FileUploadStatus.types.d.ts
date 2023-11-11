export type UploadStatusType = 'inProgress' | 'uploaded' | 'failed' | 'success' | 'replace';
export interface FileUploadStatusProps {
    id: string;
    uploadStatus: UploadStatusType;
    fileName: string;
    fileSize: number;
    fileType: string;
    imageUrl?: string;
    showProgress?: boolean;
    progressPercent?: number;
    errorMessage?: string;
    width?: number;
    onActionButton?: (id: string) => void;
    onDelete?: (id: string) => void;
    onDownload?: (id: string) => void;
    onReplace?: (id: string) => void;
    className?: string;
}
