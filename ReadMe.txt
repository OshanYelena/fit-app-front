to access different dashboards for "Admin", "Trainor", and "Member",
    1. Go to ./src/pages/DashboardComponents.js
    2. change line 34 into
        - "const role = "Admin";"       for admin dashboard
        - "const role = "Trainor";"     for instructor dashboard
        - "const role = "Member";"      for member dashboard