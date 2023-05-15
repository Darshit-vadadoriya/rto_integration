frappe.ui.form.on("Item", {
  fetch_data: function (frm) {
    var license1 = cur_frm.doc.license1;
    var vehicle_no = cur_frm.doc.register_no;
    if (cur_frm.doc.rto_register == "Registered") {
      // console.log("Hello this is fetch data function")
      if (license1 == null) {
        console.log("Hello Null ");
        vehicle_api(frm, vehicle_no);
      } else {
        // console.log("Hello Not Null")
      }
    } else {
      // console.log("Not Register Person")
    }
  },
});

function vehicle_api(frm, vehicle_no) {
  console.log("Hello this fetch api function");
  frappe.call({
    method: "rto_integration.api.vehicle_verification",
    args: { vehicle_no: vehicle_no },
    callback: function (r) {
      if (r.message == "Error") {
        console.log("Data Are Not Inserted Successfully !!");
        frappe.validated = false;
        frappe.throw("Wrong Vehicle Number Please Check and Type Again....");
      } else {
        console.log(r);
        var main = r["message"];

        //
        frappe.confirm(
          "Are you sure want To Get Data <br>"+
		  "<label for='html'>"+ "Vehicle No :- "+ main[0] + "</label><br>"
		  + "<label for='html'>"+ "Registration Date :- "+ main[6] + "</label><br>"
		  + "<label for='html'>"+ "Fuel Type :- "+  main[7] + "</label><br>"
		  + "<label for='html'>"+ "Owner Name :- "+ main[4] + "</label><br>"
		  + "<label for='html'>"+ "Vehicle Class :- "+ main[10] + "</label><br>"
		  + "<label for='html'>"+ "Insurance Date :- "+ main[main[24]] + "</label><br>"
		  + "<label for='html'>"+ "PUC :- "+ main[26] + "</label><br>"
		  + "<label for='html'>"+ "Fitness Date :- "+ main[27] + "</label><br>"
		  + "<label for='html'>"+ "Manufacturing Date :- "+ main[31] + "</label><br>"
		  + "<label for='html'>"+ "Registration Authority :- "+ main[20] + "</label><br>"
		  + "<label for='html'>"+ "Norms Type :- "+ main[24] + "</label><br>"
		  + "<label for='html'>"+ "Mv Tax Upto:- "+ main[37] + "</label><br>",

          function () {})
            // cur_frm.set_df_property("license1", "read_only", 1);
            frm.set_value("license1", main[0]);

            frm.set_value("rc_status", main[1]);
            // cur_frm.set_df_property("rc_status", "read_only", 1);

            frm.set_value("full_chassis", main[2]);
            // cur_frm.set_df_property("full_chassis", "read_only", 1);

            frm.set_value("engine", main[3]);
            // cur_frm.set_df_property("engine", "read_only", 1);

            frm.set_value("owner_name", main[4]);
            // cur_frm.set_df_property("owner_name", "read_only", 1);

            // frm.set_value("father_name_",main[5])
            // cur_frm.set_df_property("father_name_", "read_only",1);

            // cur_frm.set_df_property("registration_date", "read_only", 1);
            frm.set_value("registration_date", main[6]);

            frm.set_value("fuel_type", main[7]);
            // cur_frm.set_df_property("fuel_type", "read_only", 1);

            frm.set_value("norms_type", main[8]);
            // cur_frm.set_df_property("norms_type", "read_only",1);

            frm.set_value("vehicle_category", main[9]);
            // cur_frm.set_df_property("vehicle_category", "read_only",1);

            frm.set_value("vehicle_class", main[10]);
            // cur_frm.set_df_property("vehicle_class", "read_only",1);

            frm.set_value("number_of_cylinder", main[11]);
            // cur_frm.set_df_property("number_of_cylinder", "read_only",1);

            frm.set_value("owner_count", main[12]);
            // cur_frm.set_df_property("owner_count", "read_only",1);

            frm.set_value("sleeper_capicity", main[14]);
            // cur_frm.set_df_property("sleeper_capicity", "read_only", 1);

            frm.set_value("body_type", main[15]);
            // cur_frm.set_df_property("body_type", "read_only", 1);

            frm.set_value("owner_mobile_no", main[16]);
            // cur_frm.set_df_property("owner_mobile_no", "read_only", 1);

            frm.set_value("ownership", main[17]);
            // cur_frm.set_df_property("ownership", "read_only", 1);

            frm.set_value("vehicle_color", main[18]);
            // cur_frm.set_df_property("vehicle_color", "read_only", 1);

            frm.set_value("maker_model", main[19]);
            // cur_frm.set_df_property("maker_model", "read_only", 1);

            frm.set_value("model", main[20]);
            // cur_frm.set_df_property("model", "read_only", 1);

            frm.set_value("seating_capacity", main[21]);
            // cur_frm.set_df_property("seating_capacity", "read_only", 1);

            frm.set_value("insurance_policy_no", main[22]);
            // cur_frm.set_df_property("insurance_policy_no", "read_only", 1);

            frm.set_value("insurer_name", main[23]);
            // cur_frm.set_df_property("insurer_name", "read_only", 1);

            frm.set_value("insurance_date", main[24]);
            // cur_frm.set_df_property("insurance_date", "read_only", 1);

            frm.set_value("financier_name", main[25]);
            // cur_frm.set_df_property("financier_name", "read_only", 1);

            frm.set_value("puc_number", main[26]);
            // cur_frm.set_df_property("puc_number", "read_only", 1);

            frm.set_value("pollution", main[27]);
            // cur_frm.set_df_property("pollution", "read_only", 1);

            frm.set_value("present_address", main[28]);
            // cur_frm.set_df_property("present_address", "read_only", 1);

            frm.set_value("permanent_address", main[29]);
            // cur_frm.set_df_property("permanent_address", "read_only", 1);

            frm.set_value("registration_authority", main[30]);
            // cur_frm.set_df_property("registration_authority", "read_only", 1);

            frm.set_value("manufacturing_date", main[31]);
            // cur_frm.set_df_property("manufacturing_date", "read_only", 1);

            frm.set_value("vehicle_weight", main[32]);
            // cur_frm.set_df_property("vehicle_weight", "read_only", 1);

            frm.set_value("wheelbase", main[33]);
            // cur_frm.set_df_property("wheelbase", "read_only", 1);

            frm.set_value("gross_vehicle_weight", main[34]);
            // cur_frm.set_df_property("gross_vehicle_weight", "read_only", 1);/

            frm.set_value("is_blacklisted", main[35]);
            // cur_frm.set_df_property("is_blacklisted", "read_only", 1);

            frm.set_value("fitness_dt", main[36]);
            // cur_frm.set_df_property("fitness_dt", "read_only", 1);

            frm.set_value("cubic_capacity", main[37]);
            // cur_frm.set_df_property("cubic_capacity", "read_only", 1);

            frm.set_value("mv_tax_upto", main[38]);
            // cur_frm.set_df_property("mv_tax_upto", "read_only", 1);

            frm.set_value("permit_type", main[39]);
            // cur_frm.set_df_property("permit_type", "read_only", 1);

            frm.set_value("permit_no", main[40]);
            // cur_frm.set_df_property("permit_no", "read_only", 1);

            frm.set_value("permit_validity_upto", main[41]);
            // cur_frm.set_df_property("permit_validity_upto", "read_only", 1);

            frm.set_value("npermit_no", main[42]);
            // cur_frm.set_df_property("npermit_no", "read_only", 1);

            frm.set_value("npermit_upto", main[43]);
            // cur_frm.set_df_property("npermit_upto", "read_only", 1);

            frm.set_value("npermit_issued_by", main[44]);
            // cur_frm.set_df_property("npermit_issued_by", "read_only", 1);

            frm.set_value("noc_valid_upto", main[45]);
            // cur_frm.set_df_property("noc_valid_upto", "read_only", 1);

            frm.set_value("noc_details", main[46]);
            // cur_frm.set_df_property("noc_details", "read_only", 1);

            frm.set_value("noc_status", main[47]);
            // cur_frm.set_df_property("noc_status", "read_only", 1);

            frm.set_value("noc_issue_date", main[48]);
            // cur_frm.set_df_property("noc_issue_date", "read_only", 1);
            // console.log(fitness_dt)
            // alert(fitness_dt)
            // cur_frm.save();
            // frappe.msgprint("Hello HEllo hello ...........");
            frappe.show_alert({
              message: __("Data Are Inserted Successfully !!"),
              indicator: "green",
            
          }
        );
      }
    },
  });
}
