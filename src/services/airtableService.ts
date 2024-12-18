

export interface AirtableRecord {
  id: string;
  fields: Record<string, any>;
  createdTime: string;
}

export const fetchProfitLossData = async (): Promise<AirtableRecord[]> => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Airtable');
    }

    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    throw error;
  }
};
