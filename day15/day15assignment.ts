
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  class ContactManager {
    private contacts: Contact[] = [];
    addContact(contact: Contact): void {
      this.contacts.push(contact);
      console.log(`Contact '${contact.name}' added successfully.`);
    }
  
    viewContacts(): Contact[] {
      return this.contacts;
    }
  
    modifyContact(id: number, updatedContact: Partial<Contact>): void {
      const contact = this.contacts.find(c => c.id === id);
      if (!contact) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
      Object.assign(contact, updatedContact);
      console.log(`Contact with ID ${id} updated successfully.`);
    }
  
    deleteContact(id: number): void {
      const index = this.contacts.findIndex(c => c.id === id);
      if (index === -1) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
      this.contacts.splice(index, 1);
      console.log(`Contact with ID ${id} deleted successfully.`);
    }
  }
 
  const contactManager = new ContactManager();

  contactManager.addContact({ id: 1, name: "uday", email: "201fa04074@gmail.com", phone: "9704012334" });
  contactManager.addContact({ id: 2, name: "vishnu", email: "vishnu123@gmail.com", phone: "9876545672" });
  contactManager.addContact({ id: 1, name: "vamsi", email: "abcd123@.com", phone: "1234567890" });
  contactManager.addContact({ id: 2, name: "prasanna", email: "vishnu123@gmail.com", phone: "0987654321" });
  

  console.log("All Contacts:", contactManager.viewContacts());

  contactManager.modifyContact(1, { phone: "9391369311" });

  contactManager.deleteContact(2);

  contactManager.deleteContact(3);
 
  console.log("Updated Contacts:", contactManager.viewContacts());
