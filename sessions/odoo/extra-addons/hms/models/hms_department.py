from odoo import models, fields


class HMSDepartment(models.Model):
    _name = "hms.department"
    _rec_name = "name"

    name = fields.Char(required=True)
    capacity = fields.Integer()
    is_opened = fields.Boolean(string="Is Opened")
    patient_ids = fields.One2many("hms.patient", "department_id", string="Patients")
