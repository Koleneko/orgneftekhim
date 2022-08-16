import { FC, Ref } from "react";

export interface IBurgerBtnProps {
  open: boolean;
  onClick: () => void;
  ref: Ref<any>;
}
//
// const BurgerBtn: FC<IBurgerBtnProps> = ({ open, onClick }) => {
//   return (
//     <button
//       className={`${styles.menu} ${open && styles.opened}`}
//       onClick={onClick}
//       aria-expanded={open}
//       aria-label="Main Menu"
//     >
//       <svg width="100" height="100" viewBox="0 0 100 100">
//         <path
//           className={`line line1 ${open && styles.opened}`}
//           d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
//         />
//         <path
//           className={`line line2 ${open && styles.opened}`}
//           d="M 20,50 H 80"
//         />
//         <path
//           className={`line line3 ${open && styles.opened}`}
//           d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
//         />
//       </svg>
//     </button>
//   );
// };
//
// export default BurgerBtn;
//
//
//

//forward ref to the outermost component

const BurgerBtn: FC<IBurgerBtnProps> = ({ open, onClick, ref }) => {
  return (
    <button
      className={`menu ${open && "opened"} transform-scale-[0.5] rounded-xl`}
      onClick={onClick}
      ref={ref}
      aria-expanded={open}
      aria-label="Main Menu"
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          className={`line line1 ${open && "opened"}`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className={`line line2 ${open && "opened"}`} d="M 20,50 H 80" />
        <path
          className={`line line3 ${open && "opened"}`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

export default BurgerBtn;
