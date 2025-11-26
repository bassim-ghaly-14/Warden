// OpenModal by click "Buy Now"
    function openModal(productName) {
      document.getElementById('modal').style.display = "block";
      document.getElementById('product-name').innerText = "Product: " + productName;
    }

    // CloseModal
    function closeModal() {
      document.getElementById('modal').style.display = "none";
    }

    // Confirm Buying (fake)
    function submitForm() {
      alert("✅ Ordered Successfully!");
      closeModal();
    }

    // CloseModal by click outside Form
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target == modal) {
        closeModal();
      }
    }
    // chef-belly developer