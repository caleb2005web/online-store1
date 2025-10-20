console.log("javascript loaded!");
        // open popup form
        function openForm(productName){
            document.getElementById("orderForm").style.display="flex";
            document.getElementById("product").value=productName;
            document.getElementById("successMessage").textContent="";
        }
        // close popup
        function closeForm(){
            document.getElementById("orderForm").style.display="none";

        }
        //handle fake submission
        function submitForm(event){
            event.preventDefault();

            const product=
            document.getElementById("product").value.trim();
            const name=
            document.getElementById("name").value.trim();
            const contact=
            document.getElementById("contact").value.trim();
            const message=
            document.getElementById("message").value.trim();

            const phoneNumber="254748627193";

            if(!name || !contact) {
              alert("Please enter name and contact before sending.");
              return;
            }
            const text=`*Product:* ${product}%0A*Name:* ${name}
            %0A*Constant:*${contact}%0A*Message:*${message}`;

            // detect device type
            const isMobile= /android|iPhone|iPad|iPod|Opera Mini|IEMobile|
            WPDesktop/i.test(navigator.userAgent);

            // choose correct whatsapp link
            const baseURL = isMobile
            ?`https://wa.me/${phoneNumber}?text=${text}`
            :
            `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

            // open whatsapp
            window.open(baseURL, "_blank");

            // clear form
            document.getElementById("name").value="";
            document.getElementById("contact").value="";
            document.getElementById("message").value="";
            document.getElementById("product").value="";

            // show success message
            const successMessage=
            document.getElementById("successMessage");
            successMessage.textContent="Order submitted successful!";
            successMessage.style.color="green";
           
            // wait 2 seconds, then close
            setTimeout(()=>{
              successMessage.textContent="";
              closeForm();
            }, 2000);
        }
    