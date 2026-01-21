### Service User
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/auth/register |post |-|-|-|{email, password, firstName, lastName, phone?}|
|/auth/login|post|-|-|-|{email, password}|
|/auth/logout|post|y|-|-|-|
|/user/me|get|y|-|-|-|

#### Programs / Online Store
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/programs|get|y|-|{category?, keyword?, page?, limit?}|-|
|/orders/buy|post|y|-|-|{productId, scheduleId?}|
|/payments/submit|post|y|-|-|{orderId, method, slipImage?(file), note?}|
|/orders/:orderId|get|y|:orderId|-|-|

#### Appointments
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/appointments|post|y|-|-|{doctorId, hospitalId?, date, timeSlot, reason?}|
|/appointments/my|get|y|-|{status?, page?, limit?}|-|
|/doctors/available|get|y|-|{date, hospitalId?, specialtyId?}|-|
|/payments/submit|post|y|-|-|{orderId, method, slipImage?(file), note?}|

#### AI
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/ai/brief-filter|post|y|-|-|{text, purpose?, language?}|

---

### Admin Dashboard
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/admin/users|get|y|-|{keyword?, role?, page?, limit?}|-|
|/admin/users|post|y|-|-|{email, password?, firstName, lastName, role}|
|/admin/users/:id|get|y|:id|-|-|
|/admin/users/:id|patch|y|:id|-|{firstName?, lastName?, role?, status?}|
|/admin/users/:id|delete|y|:id|-|-|

#### Products / Orders
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/admin/products|get|y|-|{keyword?, page?, limit?}|-|
|/admin/products|post|y|-|-|{name, price, description?, type?, image?(file)}|
|/admin/products/:id|patch|y|:id|-|{name?, price?, description?, type?, image?(file)}|
|/admin/products/:id|delete|y|:id|-|-|
|/admin/orders|get|y|-|{status?, page?, limit?}|-|

#### Appointments
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/admin/appointments|get|y|-|{date?, status?, page?, limit?}|-|
|/admin/appointments/:id|delete|y|:id|-|-|

#### Doctors / Specialty
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/admin/doctors|get|y|-|{keyword?, specialtyId?, hospitalId?}|-|
|/admin/doctors|post|y|-|-|{name, specialtyId, hospitalId, bio?, photo?(file)}|
|/admin/doctors/:id|patch|y|:id|-|{name?, specialtyId?, hospitalId?, bio?, photo?(file)}|
|/admin/doctors/:id|delete|y|:id|-|-|
|/admin/specialties|post|y|-|-|{specialtyName}|

#### Hospitals / Locations
|path |method |authen |params |query | body | 
|:--|:--|:--:|:--|:--|:--|
|/admin/hospitals|get|y|-|{keyword?}|-|
|/admin/hospitals|post|y|-|-|{name, address?, phone?, locationId?}|
|/admin/hospitals/:id|patch|y|:id|-|{name?, address?, phone?, locationId?}|
|/admin/hospitals/:id|delete|y|:id|-|-|
|/admin/locations|post|y|-|-|{locationName}|