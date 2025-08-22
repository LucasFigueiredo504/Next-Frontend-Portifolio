"use server";

import { Client } from "@notionhq/client";

type ContactData = {
  name: string;
  email: string;
  message: string;
};
export async function SubmitNotionForm(data: ContactData) {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const pageId = process.env.NOTION_PAGE_ID;
  const title = data.name;
  const email = data.email;
  const message = data.message;

  try {
    // Notion API request!
    const newDb = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: pageId ?? "",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false };
    console.log(error);
  }
}
