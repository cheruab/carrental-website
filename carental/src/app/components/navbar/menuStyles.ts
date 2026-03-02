const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "22px",
    height: "16px",
    right: "24px",
    top: "28px",
  },

  bmBurgerBars: {
    background: "#c9a84c",
    height: "2px",
    borderRadius: "2px",
  },

  bmBurgerBarsHover: {
    background: "#e8d5a3",
  },

  bmCrossButton: {
    height: "24px",
    width: "24px",
    top: "20px",
    right: "20px",
  },

  bmCross: {
    background: "#c9a84c",
  },

  // 🔥 FIXED HEIGHT
  bmMenuWrap: {
    position: "fixed",
    width: "72%",
    maxWidth: "300px",
    height: "60vh",        // FULL SCREEN HEIGHT
    top: "0",
    right: "0",
    overflow: "hidden",     // PREVENT INTERNAL SCROLL
  },

  bmMenu: {
    background: "#0e0e18",
    padding: "4.5em 2em 2em",
    borderLeft: "1px solid rgba(201, 168, 76, 0.18)",
    height: "100%",         // FILL WRAPPER
  },

  bmMorphShape: {
    fill: "#0e0e18",
  },

  bmItemList: {
    color: "#ffffff",
    padding: "0.5em 0",
  },

  bmItem: {
    display: "block",
    outline: "none",
  },

  bmOverlay: {
    background: "rgba(0, 0, 0, 0.65)",
  },
};

export default menuStyles;