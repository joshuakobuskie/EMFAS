import pandas

data = pandas.read_csv('Website_data_report.csv', header=1)
response_times_list = data['RESPONSE TIME'].to_list()
patient_mileage_list = data['Patient Mileage'].dropna().to_list()

def calculate_avg_response_time(response_times):
    total = sum(response_times)
    count = len(response_times)

    return round((total / count), 2)

print(calculate_avg_response_time(response_times_list))
print(len(data.index))
print(round(sum(patient_mileage_list), 2))





