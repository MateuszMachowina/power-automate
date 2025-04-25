
# Power Automate Flow: Process Email Attachments and Extract ZIP Files

This flow automates the process of handling email attachments, specifically ZIP files. When a new email arrives with attachments, the flow updates or creates files in OneDrive and extracts the contents of the ZIP file.

---

## Flow Diagram

```
+----------------------------------------------------------+
|              When a new email arrives (V3)               |
+----------------------------------------------------------+
                            |
                            v
             +----------------------------------+
             | Check if the email has attachments? |
             +----------------------------------+
                            |
            +---------------+------------------+
            |                                  |
          Yes                                 No
            |                                  |
            v                                  v
  +---------------------+             +----------------+
  | For each attachment |             | Flow Ends      |
  +---------------------+             +----------------+
            |
            v
  +-------------------------+
  | Update file in OneDrive |
  +-------------------------+
            |
            v
+---------------------------+
| Was the update successful? |
+---------------------------+
            |
  +---------+----------+
  |                    |
  No                   Yes
  |                     |
  v                     v
+---------------------+  +-------------------+
| Create a new file    |  | Flow Ends         |
| "Fresh_Invoice_Report|  |                   |
| .zip"                |  +-------------------+
+---------------------+ 
            |
            v
  +----------------------------+
  | Extract ZIP file contents  |
  | to folder in OneDrive      |
  +----------------------------+
            |
            v
     +-------------------+
     | Flow Ends         |
     +-------------------+
```

---

## Flow Steps:

1. **Trigger: When a new email arrives (V3)**  
   The flow is triggered when a new email arrives from a specified email address and with attachments.

2. **Condition: Check if the email has attachments**  
   The flow checks whether the email contains attachments.

3. **For Each Attachment**  
   If attachments are present, the flow processes each one individually.

4. **Action: Update file in OneDrive**  
   The flow attempts to update an existing file in OneDrive with the content of the attachment.  
   If the file update is **successful**, the flow ends.

5. **Action: If update fails, create a new file in OneDrive**  
   If the file update fails, a new file named "Fresh_Invoice_Report.zip" is created in OneDrive with the attachment content.

6. **Action: Extract ZIP file to folder in OneDrive**  
   If the newly created file is a ZIP file, it is extracted to a specified folder in OneDrive.  
   If the extraction is complete, the flow ends.

---

## Setup Instructions:

1. **Importing the Flow:**
   - Download the `.zip` package provided.
   - Go to [Power Automate](https://flow.microsoft.com) and sign in with your Microsoft account.
   - Navigate to **My Flows**.
   - Click on **Import**.
   - Select the `.zip` package and upload it to import the flow.

2. **Configure Connections:**
   - During import, you will need to configure the necessary connections:
     - **OneDrive**: Make sure to authenticate and link your OneDrive account.
     - **Email**: The flow listens for emails from a specified address, so configure the connection to your email service (e.g., Outlook or Office 365).

3. **Set File Paths:**
   - Ensure the file paths in the flow are correctly set according to your OneDrive folder structure:
     - For updating or creating files in OneDrive, set the path where files will be stored.
     - For extracting ZIP files, specify the folder where the contents will be extracted.

4. **Set Email Filters:**
   - The flow is triggered by emails with attachments. Specify the email address and ensure only emails with attachments are processed.

---

## Notes:

- **OneDrive Folders**: Make sure to update the folder paths used in the flow to match your desired OneDrive structure.
- **Email Configuration**: Specify the email address from which the flow will trigger and ensure that only emails with attachments are processed.
- **ZIP Files**: This flow assumes the attachment is a ZIP file. If you're using different file types, modifications may be necessary.
- **Flow Termination**: The flow terminates at various points based on conditions (successful updates, file creation, and extraction).

---

### Example Use Case:

Imagine you receive periodic invoices via email in ZIP format. This flow automatically:
- Checks for incoming emails with attachments.
- Updates existing files in OneDrive, or creates new files if necessary.
- Extracts the contents of ZIP files into a specified folder on OneDrive, helping automate the processing of invoice files.

---

## Conclusion:

This flow provides an easy and efficient way to handle email attachments, especially when dealing with ZIP files that need to be extracted and stored in OneDrive. By automating this process, you save time and ensure consistency in managing your email attachments.

## Flow Diagram 2

```mermaid
graph TD
  A[Start: New email arrives V3] --> B[Check if email has attachments]
  B -->|Yes| C[Process each attachment]
  C --> D[Update file in OneDrive]
  D --> E{Was update successful?}
  E -->|No| F[Create new file in OneDrive - Fresh Invoice Report]
  F --> G[Extract ZIP file to folder in OneDrive]
  G --> H[End]

  E -->|Yes| H
  B -->|No| H
