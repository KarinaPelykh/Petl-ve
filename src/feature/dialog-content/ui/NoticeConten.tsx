// import { AttentionDialog } from "../../../entities/pet/ui/AttentionDialog";
// import { isLoggedIn } from "../../../shared/api/redux/user/selectors";
// import { useAppSelector } from "../../../shared/hooks/reduxHooks";
// import { Modal } from "../../../shared/ui/Modal";
// import { useGetNoticeDetails } from "../api/useGetNoticeDetails";
// import { NoticeDialog } from "./NoticeDialog";

// export const NoticeContent = ({ dialogState }) => {
//   const isLoggIn = useAppSelector(isLoggedIn);

//   const { cardData } = useGetNoticeDetails(dialogState.id);

//   return (
//     <>
//       {dialogState.mode === "favorite" ? (
//         !isLoggIn && (
//           <Modal>
//             <AttentionDialog />
//           </Modal>
//         )
//       ) : (
//         <Modal>
//           {isLoggIn ? <NoticeDialog data={cardData} /> : <AttentionDialog />}
//         </Modal>
//       )}
//     </>
//   );
// };
