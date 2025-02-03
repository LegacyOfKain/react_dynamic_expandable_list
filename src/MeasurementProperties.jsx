import usePropertiesStore from "./hooks/usePropertiesStore";

const MeasurementProperties = () => {
  const {
    properties,
    expandedIds,
    toggleExpand,
    toggleExpandAll,
    addSubProperty,
    removeSubProperty,
  } = usePropertiesStore();

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={toggleExpandAll}>
        {expandedIds.size === properties.length ? "Collapse All" : "Expand All"}
      </button>

      <div className="list-group">
        {properties.map((property) => (
          <div key={property.id} className="list-group-item mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleExpand(property.id)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">{property.name}</h5>
              <span
                className={`badge ${expandedIds.has(property.id) ? "badge-secondary" : "badge-primary"}`}
              >
                {expandedIds.has(property.id) ? "▼" : "▶"}
              </span>
            </div>

            {expandedIds.has(property.id) && (
              <div className="mt-2">
                <ul className="list-group">
                  {property.subProperties.map((subProp) => (
                    <li
                      key={subProp.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {subProp.name}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          removeSubProperty(property.id, subProp.id)
                        }
                      >
                        -
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-success btn-sm mt-2"
                  onClick={() => addSubProperty(property.id)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeasurementProperties;