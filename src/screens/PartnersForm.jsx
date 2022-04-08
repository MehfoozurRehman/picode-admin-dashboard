import React from "react";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import { useNavigate } from "react-router-dom";

export default function PartnersForm({ heading }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading} Partners</div>
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
              <div className="popup__form__input__label">
                Brand Name in English
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Brand Name in English"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Brand Name in Arabic
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Brand Name in Arabic"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Email</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Email"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Phone</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Phone"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Status</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Status"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Logo</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Logo"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Type Of Marchant</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Type Of Marchant"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Number Of Branches
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Number Of Branches"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Cities</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Name Of Reciept</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name Of Reciept"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Arabic Name Of Reciept
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Arabic Name Of Reciept"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Branch</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Reciept</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          {/* <div className="main__content__form__col">
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div> */}
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
            Partners Payment History
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Transaction ID</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Transaction ID"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Date</div>
              <input
                type="date"
                className="popup__form__input__field"
                placeholder="Enter Date"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Amount</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Amount"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Status</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Type</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Package</div>
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
            Partners Invoices
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Customer Phone Number
              </div>
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
              <div className="popup__form__input__label">Receipts</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Receipts"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Purchases</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Purchases"
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
            Partner Customer Requests
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
              <div className="popup__form__input__label">Points</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Points"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Target</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Target"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Discount/rs</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Discount"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Status</div>
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
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
