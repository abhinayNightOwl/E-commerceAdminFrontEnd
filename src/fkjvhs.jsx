.roles-add-page {
  display: flex;
  flex-direction: column;
}

.roles-add-container {
  display: flex;
}

.roles-add-main {
  flex: 1;
  padding: 20px;
}

.divider {
  margin: 20px 0;
}

.role-input-container {
  margin-bottom: 20px;
}

.permissions-container {
  display: flex;
  gap: 20px;
}

.permissions-list {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.permission-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.permission-item.selected {
  background-color: #f0f0f0;
}

.selected-permissions {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
}

.selected-permission-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.actions {
  display: flex;
  gap: 10px;
}

.save-button,
.cancel-button {
  padding: 10px 20px;
  cursor: pointer;
}

.save-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.cancel-button {
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
}
