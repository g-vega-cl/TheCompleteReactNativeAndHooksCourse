import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IJZBQsxF50-Lcm9FNQg8Q8E1EWh582dSoHRjevrjGFDkVXMS8oXVmUDaWpDGX0hMsmbmYa3UCdHuLLNX5kL_kDKJSzTGKbt2YaWLYQeTDQ-o-xklwYUS9aJKORFEYHYx'
    }
});

