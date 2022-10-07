import { useQuery } from '@tanstack/react-query';

export const useFetchPrice = () => {
  const query = `{
		viewer {
			homes {
				currentSubscription {
					priceInfo {
						current {
							total
						}
					}
				}
			}
		}
	}`;
  return useQuery(['data'], async () => {
    const res = await fetch('https://api.tibber.com/v1-beta/gql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer -pfuhH5S0_bP04_v0MwfuvaNqtQLVFkIJ4RtGeIaXWI',
      },
      body: JSON.stringify({ query }),
    });
    return await res.json();
  });
};
