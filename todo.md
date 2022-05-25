# New Todos

1. to reduce dataset sizes for the charts, change the onchange methods to send requests through the appropriate state store, determine if a new api call is necessary and pass /chartname/[day, week, month, quarter, year, all]/period/period2

2. edit `'/get_chart/:chart/:period'` to include second period2 so `'/get_chart/:chart/:interval/:period/:period2'`

3. edit each sql query to incorporate the interval and period => period2 information
   eg) `'/get_chart/AvgBlockSize/week/5-22-2022/5-29-2022'` would change the sql 
   `SELECT extract(epoch from date_trunc('hour', to_timestamp(actual_timestamp))) as at` to
   `SELECT extract(epoch from date_trunc('week', to_timestamp(actual_timestamp))) as at where at >= period and at <= period2`
