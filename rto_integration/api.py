import frappe
import requests
import json
from erpnext.utilities.transaction_base import TransactionBase
from erpnext.crm.utils import (
    CRMNote,
)



@frappe.whitelist() ## /api/method/rto_integration.api.vehicle_verification
def vehicle_verification(vehicle_no): 

    # vehicle_no="gj18bt7078"
    url = "https://g2c.softpayapi.com/api/rc_verification/vehicle_verify?apikey=DFYWO470BIPN30XH5D99R426U8CGS2BTAQK17J1A5LEC6MV3Z8&agent_code=12356&client_order_id=1234&vehicle_number="+vehicle_no

    response = requests.get(url)
    offical = response.json()
    print(offical["vehicleDetails"])

    if offical['status']!="SUCCESS":
        print("Wrong Vehicle Number Please Check and Type Again....")
        return "Error"
    else: 
        # getting all the deatils
        registration_number=offical['vehicleDetails']['registration_number']
        rc_status = offical['vehicleDetails']['rc_status']
        chassis_number=offical['vehicleDetails']['chassis_number']
        engine_number=offical['vehicleDetails']['engine_number']
        owner_name=offical['vehicleDetails']['owner_name']
        father_name = offical['vehicleDetails']['father_name']
        registration_date=offical['vehicleDetails']['registration_date']
        fuel_type=offical['vehicleDetails']['fuel_type']
        norms_type=offical['vehicleDetails']['norms_type']
        vehicle_category = offical['vehicleDetails']['vehicle_category']
        vehicle_class=offical['vehicleDetails']['vehicle_class']
        number_of_cylinder = offical['vehicleDetails']['number_of_cylinder']
        owner_serial_number=offical['vehicleDetails']['owner_serial_number']
        standing_capacity = offical['vehicleDetails']['standing_capacity']
        sleeper_capacity = offical['vehicleDetails']['sleeper_capacity']
        body_type = offical['vehicleDetails']['body_type']
        owner_mobile_no = offical['vehicleDetails']['owner_mobile_no']
        ownership = offical['vehicleDetails']['ownership']
        colour=offical['vehicleDetails']['colour']
        manufacturer=offical['vehicleDetails']['manufacturer']
        manufacturer_model=offical['vehicleDetails']['manufacturer_model']
        seating_capacity=offical['vehicleDetails']['seating_capacity']
        insurance_policy_no=offical['vehicleDetails']['insurance_policy_no']
        insurance_validity=offical['vehicleDetails']['insurance_validity']
        insurance_company_name=offical['vehicleDetails']['insurance_company_name']
        financer=offical['vehicleDetails']['financer']
        puc_number = offical['vehicleDetails']['puc_number']
        puc_valid_upto=offical['vehicleDetails']['puc_valid_upto']
        current_address=offical['vehicleDetails']['current_address']
        permanent_address=offical['vehicleDetails']['permanent_address']
        rc_registration_location=offical['vehicleDetails']['rc_registration_location']
        manufacturingYear=offical['vehicleDetails']['manufacturingYear']
        unladden_weight=offical['vehicleDetails']['unladden_weight']
        wheelbase = offical['vehicleDetails']['wheelbase']
        gross_vehicle_weight = offical['vehicleDetails']['gross_vehicle_weight']
        blacklist_status=offical['vehicleDetails']['blacklist_status']
        fitness_upto=offical['vehicleDetails']['fitness_upto']
        cubic_capacity = offical['vehicleDetails']['cubic_capacity']
        mv_tax_upto = offical['vehicleDetails']['mv_tax_upto']
        permit_type = offical['vehicleDetails']['permit_type']
        permit_no = offical['vehicleDetails']['permit_no']
        permit_validity_upto = offical['vehicleDetails']['permit_validity_upto']
        npermit_no = offical['vehicleDetails']['npermit_no']
        npermit_upto = offical['vehicleDetails']['npermit_upto']
        npermit_issued_by = offical['vehicleDetails']['npermit_issued_by']
        noc_valid_upto = offical['vehicleDetails']['noc_valid_upto']
        noc_details = offical['vehicleDetails']['noc_details']
        noc_status = offical['vehicleDetails']['noc_status']
        noc_issue_date = offical['vehicleDetails']['noc_issue_date']
        offical["vehicleDetails"]

        return  registration_number, rc_status, chassis_number, engine_number, owner_name, father_name, registration_date, fuel_type, norms_type, vehicle_category, vehicle_class, number_of_cylinder, owner_serial_number, standing_capacity, sleeper_capacity, body_type, owner_mobile_no, ownership, colour, manufacturer, manufacturer_model, seating_capacity, insurance_policy_no, insurance_company_name, insurance_validity, financer, puc_number, puc_valid_upto, current_address, permanent_address, rc_registration_location, manufacturingYear, unladden_weight, wheelbase, gross_vehicle_weight, blacklist_status, fitness_upto, cubic_capacity, mv_tax_upto, permit_type, permit_no, permit_validity_upto, npermit_no, npermit_upto, npermit_issued_by, noc_valid_upto, noc_details, noc_status, noc_issue_date
        # return offical["vehicleDetails"]

@frappe.whitelist() # /api/method/rto.api.dl_verification
def dl_verification(dl, date):

    link = "https://g2c.softpayapi.com/api/dl_verify/dl_verify"
    dl_key = "DFYWO470BIPN30XH5D99R426U8CGS2BTAQK17J1A5LEC6MV3Z8"
    dl_agent = 96369
    dl_client = 12321

    url = f"{link}?apikey={dl_key}&agent_code={dl_agent}&client_order_id={dl_client}&dl_number={dl}&dob={date}"

    dl_response = requests.post(url)
    dl_data = dl_response.json()

    return dl_data


@frappe.whitelist() # /api/method/rto_integration.api.adhar_verification
def adhar_verification():

    link = "https://softpayapi.com/api/aadhar_demographic.aspx"
    adhar_key = "DFYWO470BIPN30XH5D99R426U8CGS2BTAQK17J1A5LEC6MV3Z8"
    adhar_no="299642825653"
    adhar_name="Shah Foram Pankajbhai"
    url = f"{link}?Api_Key={adhar_key}&addharno={adhar_no}&name={adhar_name}"
    
    adhar_response = requests.post(url)
    adhar_data = adhar_response.json()

    if adhar_data["status"] == False:
        frappe.msgprint("please enter valid aadhar number & name as printed on aadhar card")
        return adhar_data["error"]
    else:
        return adhar_data["data"]


