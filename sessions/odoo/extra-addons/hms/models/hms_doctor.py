from odoo import models, fields


class HMSDoctor(models.Model):
    _name = "hms.doctor"
    _rec_name = "first_name"

    first_name = fields.Char(required=True)
    last_name = fields.Char(required=True)
    image = fields.Binary()
