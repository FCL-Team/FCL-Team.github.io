import React, {useEffect, useRef, useState} from 'react';
import {Icon} from '@site/src/components/Icons';

/**
 * Small accessible dropdown used by the download page selectors.
 * Options: {value, label: ReactNode, desc?: ReactNode}.
 */
export default function Dropdown({label, value, options, onChange, icon = 'cpu'}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = options.find((option) => option.id === value) || options[0];

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (!current) {
    return null;
  }

  return (
    <div className="fcl-select" ref={rootRef}>
      <span className="fcl-select__label">{label}</span>
      <button
        type="button"
        className="fcl-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}>
        <Icon name={icon} size={16} />
        <span className="fcl-select__value">{current.label}</span>
        <Icon name="chevronDown" size={16} className="fcl-select__chevron" />
      </button>

      {open ? (
        <ul className="fcl-select__menu" role="listbox">
          {options.map((option) => {
            const selected = option.id === value;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={
                    'fcl-select__option' +
                    (selected ? ' fcl-select__option--selected' : '')
                  }
                  onClick={() => {
                    onChange(option.id);
                    setOpen(false);
                  }}>
                  <span className="fcl-select__option-text">
                    <span className="fcl-select__option-label">{option.label}</span>
                    {option.desc ? (
                      <span className="fcl-select__option-desc">{option.desc}</span>
                    ) : null}
                  </span>
                  {selected ? (
                    <Icon name="check" size={15} className="fcl-select__check" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
