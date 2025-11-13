"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,
  colorMode = "Base",
  navMenuVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    Invert: "w-variant-b23b0bfb-3285-ab6f-754f-ce412db82d06",
  };

  const _activeStyleVariant = _styleVariantMap[colorMode];

  return (
    <_Component
      className={_utils.cx(_styles, "nav", _activeStyleVariant)}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: true,
        duration: 0,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav-custom-css", _activeStyleVariant)}
        value="%3Cstyle%3E%0A%09%2F*%20Mobile%20menu%20button%20animation%20*%2F%0A%20%20.nav-menu_btn.w--open%20.cc-top%20%7B%0A%20%20%20%20transform%3A%20translateY(9px)%20rotate(45deg)%3B%0A%20%20%7D%0A%20%20.nav-menu_btn.w--open%20.cc-middle%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%7D%0A%20%20.nav-menu_btn.w--open%20.cc-bottom%20%7B%0A%20%20%20%20transform%3A%20translateY(-9px)%20rotate(-45deg)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20When%20a%20nav%20dropdown%20is%20open..%20*%2F%0A%20%20%2F*%20..Rotate%20narrow%20*%2F%0A%20%20.nav-link.w--open%20.nav-dropdown_arrow%20%7B%0A%20%20%20%20transform%3A%20rotate(180deg)%0A%20%20%7D%0A%20%20%2F*%20..Show%20overlay%20on%20desktop%20*%2F%0A%20%20%40media%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.nav-menu%3Ahas(.nav-link.w--open)%20.nav-dropdown_overlay%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20Lock%20body%20scroll%20when%20mobile%20nav%20is%20open%20*%2F%0A%20%20body%3Ahas(%20.w-nav-button.w--open)%20%7B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Nav%20CTA%20wrapper%20mode%20when%20nav%20menu%20hidden%20*%2F%0A%20%20%40media%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.nav-menu%20%2B%20.nav-cta-wrapper%20%7B%0A%20%20%20%20%20%20margin-left%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav-custom-js", _activeStyleVariant)}
        value="%3Cscript%3E%0A%09%2F%2F----%20Skip%20to%20%3Cmain%3E%20functionality%20----%0A%20%20document.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20skipLinkEle%20%3D%20document.getElementById('skip-link')%3B%0A%20%20%20%20if%20(!skipLinkEle)%20return%3B%0A%0A%20%20%20%20skipLinkEle.addEventListener('click'%2C%20handleSkipLink)%3B%0A%20%20%20%20skipLinkEle.addEventListener('keydown'%2C%20handleSkipLink)%3B%0A%20%20%7D)%3B%0A%0A%20%20function%20handleSkipLink(e)%20%7B%0A%20%20%20%20if%20(e.type%20%3D%3D%3D%20'keydown'%20%26%26%20e.key%20!%3D%3D%20'Enter')%20return%3B%0A%0A%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20const%20target%20%3D%20document.querySelector('main')%3B%0A%20%20%20%20target.setAttribute('tabindex'%2C%20'-1')%3B%0A%20%20%20%20target.focus()%3B%0A%20%20%7D%0A%3C%2Fscript%3E"
      />
      <_Builtin.Link
        className={_utils.cx(_styles, "nav-skip-link", _activeStyleVariant)}
        button={false}
        id="skip-link"
        block=""
        options={{
          href: "#main",
        }}
      >
        {"Skip to Main Content"}
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "cc-nav",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "nav-logo_link", _activeStyleVariant)}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "nav-logo_img", _activeStyleVariant)}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/690c0077653da2f9071ad5ce/690c09332638d4816a0419f1_Gentile-Brewing-Primary-Badge%202.png"
          />
        </_Builtin.NavbarBrand>
        {navMenuVisibility ? (
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "nav-menu_btn", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-top",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-middle",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-bottom",
                _activeStyleVariant
              )}
              tag="div"
            />
          </_Builtin.NavbarButton>
        ) : null}
        {navMenuVisibility ? (
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu", _activeStyleVariant)}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-dropdown_overlay",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_container",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Drink"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Visit"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Rent Space"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Attend Events"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Shop Merch"}
              </_Builtin.NavbarLink>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-cta-wrapper", _activeStyleVariant)}
          tag="div"
        >
          <Button buttonText="What's On Tap" variant="Secondary" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
