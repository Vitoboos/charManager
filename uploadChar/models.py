from pickle import TRUE
from django.db import models

class Character(models.Model):

    id = models.BigAutoField(primary_key=True)
    charName = models.CharField(max_length=100)
    charClass = models.CharField(max_length=100, default="Sin Rol")
    charSex = models.CharField(max_length=100)

    charHp = models.IntegerField(default=1)
    charStr = models.IntegerField(default=0)
    charSkl = models.IntegerField(default=0)
    charSpd = models.IntegerField(default=0)
    charLk = models.IntegerField(default=0)
    charDef = models.IntegerField(default=0)
    charRes = models.IntegerField(default=0)
    charCon = models.IntegerField(default=1)

    charHpGrowth = models.IntegerField(default=0)
    charStrGrowth = models.IntegerField(default=0)
    charSklGrowth = models.IntegerField(default=0)
    charSpdGrowth = models.IntegerField(default=0)
    charLkGrowth = models.IntegerField(default=0)
    charDefGrowth = models.IntegerField(default=0)
    charResGrowth = models.IntegerField(default=0)


    def __str__(self):
        return self.charName