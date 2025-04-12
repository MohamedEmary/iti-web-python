from odoo import models, fields


class HMSPatient(models.Model):
    _name = "hms.patient"
    _rec_name = "first_name"

    first_name = fields.Char(string="First Name", required=True)
    last_name = fields.Char(string="Last Name", required=True)
    birth_date = fields.Date(string="Birth Date", required=True)
    history = fields.Html(string="History")
    cr_ratio = fields.Float(string="CR Ratio")
    blood_type = fields.Selection(
        [("a", "A"), ("b", "B"), ("ab", "AB"), ("o", "O")], string="Blood Type"
    )
    pcr = fields.Boolean(string="PCR")
    image = fields.Image(string="Patient Image")
    address = fields.Text(string="Address")
    age = fields.Integer(string="Age")
    state = fields.Selection(
        [
            ("undetermined", "Undetermined"),
            ("good", "Good"),
            ("fair", "Fair"),
            ("serious", "Serious"),
        ],
        default="undetermined",
    )

    department_id = fields.Many2one(
        "hms.department", string="Department", domain="[('is_opened', '=', True)]"
    )

    department_capacity = fields.Integer(
        string="Department Capacity",
        related="department_id.capacity",
        readonly=True,
    )

    doctor_ids = fields.Many2many(
        "hms.doctor", string="Doctors", context={"tags": True}
    )
