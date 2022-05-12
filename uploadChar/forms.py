from dataclasses import field
from django import forms
from .models import Character


class CharacterForm(forms.ModelForm):

    charName = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Character name', 'id':'charName', 'autocomplete':'off'}))
    charClass = forms.CharField(widget=forms.TextInput(attrs={ 'placeholder': 'Character class', 'id':'charClass', 'readonly':'on'}))

    genders = [('Male', 'Male'), ('Female', 'Female')]
    charSex = forms.ChoiceField(choices=genders, widget=forms.RadioSelect(attrs={'class':'sexBtn', 'id':'charSex'}))

    charHp = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'1', 'id':'charHp'}))
    charStr = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charStr'}))
    charSkl = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charSkl'}))
    charSpd = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charSpd'}))
    charLk = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charLk'}))
    charDef = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charDef'}))
    charRes = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'0', 'id':'charRes'}))
    charCon = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'01','min':'1', 'id':'charCon'}))

    charHpGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charHpGrowth'}))
    charStrGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charStrGrowth'}))
    charSklGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charSklGrowth'}))
    charSpdGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charSpdGrowth'}))
    charLkGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charLkGrowth'}))
    charDefGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charDefGrowth'}))
    charResGrowth = forms.IntegerField(widget=forms.NumberInput(attrs={'step':'05', 'min': '0', 'id':'charResGrowth'}))

    class Meta:

        model = Character
        fields = '__all__'

