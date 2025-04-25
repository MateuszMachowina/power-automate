# ⚙️ Power Automate Flows

This repository contains automated workflows created with **Power Automate** to streamline business processes. 

---

## 🔄 Flows Overview 

### 1. **Customer Overdue Payment Notifier** 📧
- **Purpose**: Notifies customers about overdue invoices by sending them a payment reminder email with an attached table of their outstanding invoices.
- **Key Features**:
  - Retrieves overdue invoices from Excel in OneDrive.
  - Sends email reminders to customers with an HTML table of overdue invoices.
  - Loops through each email and processes customer-specific data.

### 2. **Email Attachment Processor & ZIP Extractor** 🗂️
- **Purpose**: Automates the process of handling email attachments, specifically ZIP files. When a new email arrives with attachments, this flow updates or creates files in OneDrive and extracts the contents of ZIP files.
- **Key Features**:
  - Processes email attachments.
  - Handles ZIP file updates or creates new files in OneDrive.
  - Extracts contents of ZIP files to a specified OneDrive folder.

---

## 📂 Folder Structure 

```
/power-automate
│
├── /Customer-Overdue-Payment-Notifier
│   ├── README.md          # Documentation for overdue payment notifier
│   ├── Notifycustomers(...).zip # Power Automate flow definition for Customer Overdue Payment Notifier
│   ├── Overdue_Invoices_Report.xlsx # Sample Excel file for overdue invoices
│   └── excel_script_overdue_days.ts # Excel script to calculate overdue days (included in .xlsx already)
│
└── /Email-Attachment-Processor-&-ZIP-Extractor
    ├── README.md          # Documentation for email attachment processor
    ├── Auto-Extracting(...).zip # Power Automate flow definition for Email Attachment Processor
    └── Overdue_Invoices_Report.zip # Sample ZIP file for email attachment testing
```

---

## 🔧 How to Use 

1. **Download the Flow Packages**:
   - Navigate to the relevant flow folder (`Customer-Overdue-Payment-Notifier` or `Email-Attachment-Processor-ZIP-Extractor`).
   - Download the `.zip` file containing the Power Automate flow.

2. **Import into Power Automate**:
   - Go to [Power Automate](https://flow.microsoft.com) and log in with your Microsoft account.
   - Go to **My Flows**, click on **Import**, and upload the `.zip` package for the flow you wish to use.

3. **Configure Connections**:
     - Set up connections to **OneDrive** and **Outlook/Office 365** to retrieve the overdue invoices and send emails.

4. **Customize as Needed**:
   - Adjust the folder paths, file names, or email addresses as necessary to suit your organization’s needs.

---

## 📋 Requirements 

- **Power Automate** account (Microsoft 365 or applicable subscription).
- Access to **OneDrive for Business** and **Outlook/Office 365** accounts.
- Files in the correct format (Excel for the payment notifier, ZIP for the attachment processor).

## 📝 Notes 

- Ensure that your **OneDrive folders** and **Excel file structure** match the expected paths and format in the flow to avoid errors.
- Modify the email body or dynamic content if you want to customize the email notifications.


