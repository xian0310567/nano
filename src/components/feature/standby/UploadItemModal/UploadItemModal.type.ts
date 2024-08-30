import { AddStandByCallback } from "@/hooks/feature/standby/useAddStandby";

export type UploadItemModalProps = {
  onOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addStandBy: AddStandByCallback;
};
