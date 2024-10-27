const products = [];

        function addProduct() {
            const name = document.getElementById("productName").value;
            const address = document.getElementById("productAddress").value;
            const price = document.getElementById("productPrice").value;
            const quantity = document.getElementById("productQuantity").value;
            const image = document.getElementById("productImage").value;
            const description = document.getElementById("productDescription").value;

            if (!name || !address || !price || !quantity || !image || !description) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

            const tableBody = document.getElementById("productTableBody");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${address}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td><img src="${image}" alt="${name}"></td>
                <td>${description}</td>
                <td>
                    <button onclick="editProduct(this)">Sửa</button>
                    <button onclick="deleteProduct(this)">Xóa</button>
                </td>
            `;
            tableBody.appendChild(row);
            clearInputs();
        }

        function editProduct(button) {
            const row = button.closest("tr");
            const cells = row.cells;

            document.getElementById("productName").value = cells[0].innerText;
            document.getElementById("productAddress").value = cells[1].innerText;
            document.getElementById("productPrice").value = cells[2].innerText;
            document.getElementById("productQuantity").value = cells[3].innerText;
            document.getElementById("productImage").value = cells[4].querySelector('img').src;
            document.getElementById("productDescription").value = cells[5].innerText;

            row.remove();
        }

        function deleteProduct(button) {
            const row = button.closest("tr");
            row.remove();
        }

        function clearInputs() {
            document.getElementById("productName").value = "";
            document.getElementById("productAddress").value = "";
            document.getElementById("productPrice").value = "";
            document.getElementById("productQuantity").value = "";
            document.getElementById("productImage").value = "";
            document.getElementById("productDescription").value = "";
        }

        function searchProduct() {
            const searchValue = document.getElementById("searchInput").value.toLowerCase();
            const rows = document.querySelectorAll("#productTableBody tr");

            rows.forEach(row => {
                const productName = row.cells[0].innerText.toLowerCase();
                row.style.display = productName.includes(searchValue) ? "" : "none";
            });
        }

        // Sample products for testing
        products.push({ name: "Áo Gucci", address: "Hà Nội", price: "200000", quantity: "10", image: "https://mikenco.vn/wp-content/uploads/2024/03/20240329-192059-1024x1024.jpg", description: "Mô tả sản phẩm" });
        products.push({ name: "Áo Gucci1", address: "Hà Nội", price: "250000", quantity: "5", image: "https://mikenco.vn/wp-content/uploads/2023/04/341726847_6510547985642606_826099707234243764_n-1024x1024.jpg", description: "Mô tả sản phẩm" });
        products.push({ name: "Áo Gucci2", address: "Hà Nội", price: "300000", quantity: "2", image: "https://mikenco.vn/wp-content/uploads/2024/06/449193432_384593917442827_3140107127367200725_n-1024x1024.png", description: "Mô tả sản phẩm" });

        // Display sample products on page load
        products.forEach(product => {
            const tableBody = document.getElementById("productTableBody");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.address}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.description}</td>
                <td>
                    <button onclick="editProduct(this)">Sửa</button>
                    <button onclick="deleteProduct(this)">Xóa</button>
                </td>
            `;
            tableBody.appendChild(row);
        });