import React from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function CustomersForm({ heading }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading} Customers</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              {heading === "Add" ? "Add New" : "Save"}
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
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Phone Number</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Phone Number"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Email Address</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Email Address"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Last 4 digits of Credit/Visa card
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Last 4 digits of Credit/Visa card"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Total Number of Invoices Uploaded
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Total Number of Invoices Uploaded"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Total Purchases</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Total Purchases"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Total Points</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Total Points"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Level</div>
              <Select
                options={[
                  { value: "Bronze", label: "Bronze" },
                  { value: "Silver", label: "Silver" },
                  { value: "Gold", label: "Gold" },
                  { value: "Platinum", label: "Platinum" },
                ]}
                theme={(theme) => ({
                  ...theme,

                  colors: {
                    ...theme.colors,
                    primary25: "#f6f6f6",
                    primary: "#9a7cb8",
                    primary50: "f6f6f6",
                  },
                })}
                isMulti
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Total Number of Pending Promo requests
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Total Number of Pending Promo requests"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            List of Invoices Uploaded
            <button className="main__header__top__buttons__button">Add</button>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Arabic</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Arabic"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Branch</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Branch"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <UploadImage label="Image" />
            <button
              className="main__header__top__buttons__button"
              style={{ marginLeft: 0, background: "#242424" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
