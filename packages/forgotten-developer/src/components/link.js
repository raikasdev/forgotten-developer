import React from "react";
import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const CustomLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = () => {

    //Scroll to the PostCotainer top when a link is clicked
    document.getElementById("content-container").scrollTo(0,0);

    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

export default connect(CustomLink, { injectProps: false });
