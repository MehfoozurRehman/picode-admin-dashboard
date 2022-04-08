import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "../components/Tab";
import TableHeaderEntry from "../components/TableHeaderEntry";

function PartnersDetailsTableEntry({ onView, onEdit, onDelete }) {
  return (
    <div className="main__content__table__list">
      {/* <div className="main__content__table__list__entry">
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
          onClick={onView}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-eye"
            style={{ marginTop: 7 }}
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__primary"
          onClick={onEdit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.119"
            height="42.829"
            viewBox="0 0 43.119 42.829"
          >
            <defs>
              <filter
                id="Ellipse_150"
                x="0"
                y="0"
                width="43.119"
                height="42.829"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dx="3" dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_150)">
              <g
                id="Ellipse_150-2"
                data-name="Ellipse 150"
                transform="translate(7.5 7.5)"
                fill="transparent"
                stroke="currentColor"
                stroke-width="1"
              >
                <ellipse
                  cx="11.059"
                  cy="10.915"
                  rx="11.059"
                  ry="10.915"
                  stroke="none"
                />
                <ellipse
                  cx="11.059"
                  cy="10.915"
                  rx="10.559"
                  ry="10.415"
                  fill="none"
                />
              </g>
            </g>
            <path
              id="Icon_material-edit"
              data-name="Icon material-edit"
              d="M4.5,17.582v3.443H7.943L18.1,10.871,14.655,7.427ZM20.761,8.208a.914.914,0,0,0,0-1.295L18.612,4.765a.914.914,0,0,0-1.295,0l-1.68,1.68L19.08,9.888Z"
              transform="translate(12.007 1.343)"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
          onClick={onDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.339"
            height="20.15"
            viewBox="0 0 20.339 26.15"
          >
            <path
              id="Icon_material-delete-forever"
              data-name="Icon material-delete-forever"
              d="M8.953,27.745a2.914,2.914,0,0,0,2.906,2.906H23.481a2.914,2.914,0,0,0,2.906-2.906V10.311H8.953ZM12.527,17.4l2.048-2.048,3.094,3.08,3.08-3.08L22.8,17.4l-3.08,3.08,3.08,3.08-2.048,2.048-3.08-3.08-.261.261L14.59,25.609l-2.048-2.048,3.08-3.08ZM22.754,5.953,21.3,4.5H14.038L12.585,5.953H7.5V8.858H27.839V5.953Z"
              transform="translate(-7.5 -4.5)"
              fill="currentcolor"
            />
          </svg>
        </button>
      </div> */}
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">Bilal John</div>
    </div>
  );
}

export default function PartnersDetails({ onAdd, onEdit, onDelete }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("Details");
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Partner Details</div>
          <div className="main__header__top__buttons">
            {/* <button className="main__header__top__buttons__button">
              Bulk Add
            </button> */}
            <button
              className="main__header__top__buttons__button"
              style={{ background: "#242424" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          {/* <div
            className="main__content__form__col"
            style={{
              width: "100%",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Name
          </div> */}
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Type of Merchant
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              2123
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Number of Branches
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1313
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Cities
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1213
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Name on Receipt
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              Bronze
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Arabic name on Receipt
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              141414
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Branch
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              141414
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Receipt
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              141414
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{
              width: "100%",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Partners Payment History
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Transaction ID
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              2123
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Date
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1313
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Amount
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1213
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Status
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              Bronze
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Type
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              141414
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Package
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              141414
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{
              width: "100%",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Partners Invoices
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Customer Phone Number
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              2123
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Receipts
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1313
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Purchases
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1213
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{
              width: "100%",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Partner Customer Requests
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Phone Number
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              2123
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Points
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1313
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Target
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              1213
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Discount/rs
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              Bronze
            </div>
          </div>
          <div className="main__content__form__col">
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontSize: 14 }}
            >
              Status
            </div>
            <div
              className="popup__form__input__label"
              style={{ marginLeft: -1, fontWeight: "normal" }}
            >
              Promo Code Generated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
