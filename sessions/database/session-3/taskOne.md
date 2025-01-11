- Musician (ID PK, Name, St, City, Phone)
- Album (ID PK, Date, Title, MusicianID FK)
- Instrument (Name PK, Key)
- Song (Title PK, Author. AlbumID FK)
- PlayInstrument ((InstrumentName FK, MusicianID FK) PK)
- PlaySong ((SongTitle FK, MusicianID FK) PK)

---

- SalesOffice (Num PK, Loc, EmployeeID FK)
- Employee (ID PK, Name, SalesOfficeNUM FK)
- Property (ID PK, Add, City, State, Zip, SalesOfficeNUM FK)
- Owner (ID PK, Name)
- OwnerHas ((PropertyID FK, OwnerID FK) PK, Percent-owned)

---

- Patient (ID PK, Name, DOB, Ward_ID FK, Consultant_ID)
- Ward (ID PK, Name, NurseID FK)
- Consultant (ID PK, Name)
- Nurse (ID PK, Name, WardID FK)
- Drug (Code PK, RecDosage)
- DrugBrand ((DrugCode FK, Brand) PK)
- Examines ((PatientID FK, ConsultantID FK) PK)
- Gives ((DrugCode FK, PatientID FK, NurseID FK) PK, Date, Time, Dosage)

---

- Airline (ID PK, Name, Address, ContactPerson)
- AirlinePhones ((AirlineID FK, Phone) PK)
- Employee (ID PK, Name, Address, Day, Month, Year, Position, Gender)
- EmployeeQualifications ((EmployeeID FK, Qualification) PK)
- Transaction (ID PK, Desc, Date, Amount, AirlineID FK)
- AircraftCrew (AircraftID PK, Capacity, Model, CrewID, AssPilot, MajPilot, Hostess1, Hostess2, AirlineID FK)
- Route (ID PK, Distance, Origin, Destination, Classification)
- AssignedRoute ((RouteID FK, AircraftID FK) PK, Price, Pass, DeptDateTime, ArrDateTime)
