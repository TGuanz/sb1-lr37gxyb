const AIRTABLE_API_KEY = 'patWa7h4RrHArJydB.395e6344c19cd8938b6527e6cdb60631ea0e2bf74c3e52cee5700466fba0bc3b';
const BASE_ID = 'app1ECw6zKtn8F4lW';
const TABLE_ID = 'tblVv3WDauNbHDK8B';

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