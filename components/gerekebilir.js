// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// const [version, setVersion] = useState("");
// const [equipmentCode, setEquipmentConde] = useState("");
// const [issueYear, setIssueYear] = useState("");
// const [productionPlace, setProductionPlace] = useState("");

// setVersion(version);
// setEquipmentConde(equipmentCode);
// setIssueYear(issueYear);
// setProductionPlace(productionPlace);

{
  /* <Formik
        initialValues={{
          equipmentCode: "",
          productionPlace: "",
          version: "",
          issueYear: "",
          serialNumber: "",
        }}
        validationSchema={Yup.object({
          equipmentCode: Yup.string().required("Equipment code is required"),
          productionPlace: Yup.string().required(
            "Place of production is required"
          ),
          version: Yup.number().integer().required("Version is required"),
          issueYear: Yup.number()
            .integer()
            .required("Year of issue is required"),
          serialNumber: Yup.number()
            .integer()
            .required("Serial number is required"),
        })}
        onSubmit={async (values, { resetForm }) => {
          // alert(JSON.stringify(values, null, 2));
          const {
            version,
            equipmentCode,
            issueYear,
            serialNumber,
            productionPlace,
          } = values;
          setVersion(version);
          setEquipmentConde(equipmentCode);
          setIssueYear(issueYear);
          setProductionPlace(productionPlace);
          const concatenatedValue =
            version +
            equipmentCode +
            issueYear +
            serialNumber +
            productionPlace;

          try {
            await axios.post("/api/vins", { vinNumber: concatenatedValue });
            console.log("posted");
            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <div className="label">Pek Auto</div>
          <label htmlFor="equipmentCode">Equipment Code</label>
          <Field name="equipmentCode" as="select">
            <option value="">Select an option</option>
            <option value="000">Base platform</option>
            <option value="014">Bumper</option>
            <option value="037 ">Drum Mulcher</option>
            <option value="036">Side Trimmer</option>
            <option value="038">Sprayer</option>
            <option value="027 ">Lawn Mower</option>
          </Field>
          <ErrorMessage name="equipmentCode" component="div" />

          <label htmlFor="productionPlace">Place of Production</label>
          <Field name="productionPlace" as="select" type="text">
            <option value="">Select an option</option>
            <option value="00">Slovenia</option>
            <option value="01">Turkey</option>
          </Field>
          <ErrorMessage name="productionPlace" component="div" />

          <label htmlFor="version">Version</label>
          <Field name="version" type="text" />
          <ErrorMessage name="version" component="div" />

          <label htmlFor="issueYear">Year of Issue</label>
          <Field name="issueYear" type="text" />
          <ErrorMessage name="issueYear" component="div" />

          <label htmlFor="serialNumber">Serial Number</label>
          <Field name="serialNumber" type="text" />
          <ErrorMessage name="serialNumber" component="div" />

          <button type="submit">Generate</button>
        </Form>
      </Formik> */
}
